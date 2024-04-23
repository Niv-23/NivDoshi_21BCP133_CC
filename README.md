# NivDoshi_21BCP133_CC
This is for Cloud Computing IA-2
Setting Up a Blog using GitHub Pages and Jekyll:

1.	Create a New GitHub Repository:
•	Go to GitHub and sign in or create an account.
•	Click on the '+' sign in the upper right corner and select "New repository".
•	Name your repository in the format <username>.github.io. For example, if your username is "user123", name the repository "user123.github.io".
•	Initialize the repository with a README file.
•	Click on "Create repository".

2.	Install Jekyll Locally:
•	Install Jekyll on your local machine by following the instructions on the official Jekyll website.

3.	Set Up Your Jekyll Site:
•	Clone your GitHub repository to your local machine.
•	Navigate to the repository folder and run jekyll new . --force to create a new Jekyll site in your repository.
•	Customize your site by editing the _config.yml file and adding content to the _posts directory.

4.	Test Your Site Locally:
•	Run bundle exec jekyll serve from your repository folder to build and serve your Jekyll site locally.
•	Open your web browser and go to http://localhost:80 to view your site.

5.	Commit and Push Changes:
•	Once you're satisfied with your site, commit your changes and push them to your GitHub repository.

6.	Enable GitHub Pages:
•	Go to your GitHub repository's settings.
•	Scroll down to the "GitHub Pages" section.
•	Under "Source", select "main" branch (or whichever branch you're using) and click "Save".

7.	Access Your Blog:
•	Your blog should now be live at http://<username>.github.io.


Uploading Container Images to Dockerhub:

1.	Install Docker:
•	If you haven't already, install Docker on your local machine by following the instructions on the official Docker website.

2.	Build Your Docker Image:
•	Create a Dockerfile in your project directory to define your container.
•	Build your Docker image using the docker build command.

3.	Tag and Push Your Image:
•	Tag your Docker image with your Dockerhub username and the repository name using the docker tag command.
•	Log in to Dockerhub using the docker login command.
•	Push your Docker image to Dockerhub using the docker push command.


Writing a Blog Post Documenting the Process:

1.	Create a New Blog Post:
•	Create a new Markdown file in your Jekyll _posts directory with a filename in the format YYYY-MM-DD-title.md.

2.	Document the Steps:
•	Write a detailed description of the steps you took to set up your blog using GitHub Pages and Jekyll.
•	Include instructions for installing Jekyll, customizing your site, testing it locally, enabling GitHub Pages, and accessing your blog.
•	Document the steps for uploading container images to Dockerhub, including building, tagging, logging in, and pushing your Docker image.

3.	Include Screenshots:
•	Take screenshots of your GitHub repository settings, Docker commands, and any other relevant steps.
•	Embed these screenshots in your blog post to provide visual aids for your readers.

4.	Publish Your Blog Post:
•	Commit and push your blog post Markdown file to your GitHub repository.
•	GitHub Pages will automatically build and publish your blog post to your live site.

5.	Share Your Blog Post:
•	Share the link to your blog post on social media or other platforms to reach a wider audience and share your knowledge.
