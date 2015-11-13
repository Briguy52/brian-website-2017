---
layout: post_page
title: Sphinx for Mac - PDF Creation with LaTeX
---

#### Introduction

This will be a close-to-comprehensive guide on how to get started creating PDF and LaTeX files from .rst (reStructuredText) using Sphinx. If you're not familiar with Sphinx, it's a documentation generator that takes .rst files and converts them into other formats (such as HTML, PDF, LaTeX, etc.)

Recommended knowledge:

> A basic understanding of programming (preferably Python)
>
> Familiarity with basic Mac Terminal concepts and commands (`open,cd,ls,pwd,sudo`,etc.) 
>
> You can visit Duke’s [Unix Tutorial](http://pundit.pratt.duke.edu/wiki/UNIX_Tutorial) for some good examples and explanations. 
>
> A good deal of patience and Google-fu when you get stuck!

Note: While you don’t need to be familiar with LaTeX formatting (since Sphinx and MacTeX will do that for you), if you need to do any ‘White Box’ work, it will come in handy!

#### Installation 

Your Mac should come with Python 2.7 installed. You may install Python 3 if you wish, but this writeup will use Python 2.7 because that is what I have.

Install Sphinx according to the [documentation](http://sphinx-doc.org/latest/install.html) on their website. I used MacPorts to install Sphinx as they recommended and then did the ‘quick start’ setup. Google ‘Sphinx QuickStart’ for a thorough explanation of the process.

Download and install [MacTeX](https://tug.org/mactex/). Make sure you download the package with Safari and have sufficient space on your computer. I believe the full package (which you need) takes up around 4-5 gb of space. Note: if space is an issue, you may want to consider avoiding LaTeX and trying rst2pdf or a similar Sphinx extension. However, these alternatives will not be covered in this tutorial.

#### Anatomy of a Sphinx Main Directory

There are many files and folders created within your Main Directory. In this writeup, we will only concern ourselves with the relevant ones: conf.py, Makefile, _build, and index.rst. 

**conf.py** is our configuration file. This contains your settings from the Sphinx quick start. We can also add extensions (such as rst2pdf) as well as additional options (such as LaTeX, PDF, or HTML options). Since this is a Python script (due to the .py extension), make sure you follow correct Python formatting. If you do not know Python formatting, copy-paste is your friend. Note: a common syntax error arises from TextEdit modifying apostrophes from good vertical apostrophes (') to bad slanted apostrophes (‘). Make sure all your apostrophes are vertical!

The **Makefile** contains various command shortcuts that you can run in terminal. For example, instead of having to type in: 

	sphinx-build -b latex -d _build/doctrees   . _build/latex

We can simply type:

	make latex 

Which will go into the Makefile and run the more complicated code.  

The **_build** (builddir) folder contains the files that we build. This includes both the final result (such as a PDF) as well as all the intermediate files (such as a .tex). You can name this folder whatever you want; I simply chose ‘_build’

Finally, you will need an **index.rst** file. This has to be an .rst or .txt file (depending on your config settings) and the name does not matter as long as it’s consistent with conf.py. This file will be formatted in reStructuredText (hence the .rst extension) and contains the actual content that will be translated into LaTeX and then PDF.

#### Config and Makefile Setup

Your Makefile should come with the correct commands preset. In case you’re missing ‘latex’ and ‘latexpdf’, copy in the following:

	latex:
		$(SPHINXBUILD) -b latex $(ALLSPHINXOPTS) $(BUILDDIR)/latex
		@echo
		@echo "Build finished; the LaTeX files are in $(BUILDDIR)/latex."
		@echo "Run \`make' in that directory to run these through (pdf)latex" \
	      	"(use \`make latexpdf' here to do that automatically)."

	latexpdf:
		$(SPHINXBUILD) -b latex $(ALLSPHINXOPTS) $(BUILDDIR)/latex
		@echo "Running LaTeX files through pdflatex..."
		$(MAKE) -C $(BUILDDIR)/latex all-pdf
		@echo "pdflatex finished; the PDF files are in $(BUILDDIR)/latex."

Note that `latexpdf` contains the `latex` command along with the `make all-pdf` command.

In your `conf.py` file, you should find a section entitled **Options for LaTeX output**. Read through it and modify the presets to fit your project. For most, that means specifying your desired document title and source in the `latex_document` setting. 

#### .tex and PDF Creation

If all your files are the correct places (i.e. from your directory you should be able to see Makefile, conf.py, _build, and index.rst), all that you need to do now is type in:

	make latexpdf

It will take a couple moments, but then you will find your freshly created filename.pdf in your _build/latex folder (along with all the intermediate files). 

#### pdflatex Issues

You may have encountered an error about `pdflatex not found` or something of the sort. `pdflatex` is an executable that comes along with MacTeX. But even after installing the full MacTeX package, I was still getting this error! 

After some Googling, I found a very helpful [post](https://support.rstudio.com/hc/communities/public/questions/201410073-pdflatex-error-on-OSX) on R Studio. 

User Dave Dyer suggested entering the following lines into your terminal:

	sudo ln -s /Library/TeX/Distributions/.DefaultTeX/Contents/Programs/texbin/usr/texbin
	sudo ln -s /usr/texbin/pdflatex /usr/bin/pdflatex 

And that did it for me! Basically, even though you have the `pdflatex` file installed, Sphinx can’t find it when you run the `make latexpdf` command. To fix this, you simply need to specify the correct file paths using the `ln` command (link). 

#### Creating Multiple PDFs 

You may want to create multiple PDFs using multiple .rst files. The intuitive way to do this would be to simply go folder by folder and repeat this process. (I am currently working on a more elegant solution that retains the single ‘make latexpdf’ process).

First, I recommend that you familiarize yourself with the `sphinx-build` command’s many options that can be found in Sphinx’s [documentation](http://sphinx-doc.org/invocation.html). The ones that we will cover are `-b, -d, and -c`.

Here is the general format for `sphinx-build`:

	$ sphinx-build [options] sourcedir builddir [filenames]

‘-b’ gives the `buildername`, such as `html` or `latex`. We will be using `latex`.

‘-d’ specifies the path within the source directory. This is what’s used when we run ‘make latex’

‘-c’ specifies the path somewhere other than the source directory. This is what we will use.

To convert your .rst file into a .tex file, run the following:

	sphinx-build -b latex -c /foo/bar/folder . /foo/bar/folder/_build/latex

This takes the index.rst file in `folder` and outputs a corresponding .tex file within `folder/_build/latex`.

Now, `cd` over to the .tex file’s folder:

	cd /foo/bar/folder/_build/latex

And let’s convert everything there to PDF:

	make all-pdf

As the name implies, `make all-pdf` converts all the .tex files in a folder to PDFs. If you have multiple .rst files, have them output their .tex files to the same folder (such as `/home/_build/latex`) and then run `make all-pdf` at the very end.

This [Google groups post](https://groups.google.com/forum/#!topic/sphinx-users/XNnVdAhTC7A) started by Lenz Grimmer was especially helpful to me. I recommend you give it a skim. 


#### Closing

Thank you for reading this writeup! I will update this article as a I learn new things and encounter new obstacles. Pictures and screenshots will be added soon though they shouldn’t be necessary to understand the process.

Please contact me with any questions, suggestions, or criticisms at bri@nmlin.org. 

*Last updated: Tuesday, May 26th, 2015*
