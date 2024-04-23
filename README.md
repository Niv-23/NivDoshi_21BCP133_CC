# NivDoshi_21BCP133_CC
This is for Cloud Computing IA-2
Setting Up a Jekyll Blog on GitHub Pages

Create a New GitHub Repository:

Sign in or create an account on GitHub.
Click the "+" sign and select "New repository".
Name your repository in the format <username>.github.io (replace <username> with your username).
Initialize the repository with a README file and click "Create repository".
Install Jekyll Locally:

Follow the instructions on the official Jekyll website to install Jekyll on your machine (https://jekyllrb.com/docs/installation/).
Set Up Your Jekyll Site:

Clone your GitHub repository to your local machine.
Navigate to the repository folder and run jekyll new . --force to create a new Jekyll site.
Customize your site by editing the _config.yml file and adding content to the _posts directory.
Test Your Site Locally:

Run bundle exec jekyll serve from your repository folder to build and serve your site locally.
Open your web browser and go to http://localhost:80 to view your site.
Commit and Push Changes:

Once you're happy with your site, commit your changes and push them to your GitHub repository.
Enable GitHub Pages:

Go to your GitHub repository's settings.
Scroll down to the "GitHub Pages" section.
Under "Source", select the branch you're using (usually "main") and click "Save".
Access Your Blog:

Your blog should now be live at http://<username>.github.io (replace <username> with your username).
Uploading Container Images to Dockerhub

Install Docker:

If you haven't already, install Docker on your local machine following the instructions on the official Docker website (https://docs.docker.com/engine/install/).
Build Your Docker Image:

Create a Dockerfile in your project directory to define your container.
Build your Docker image using the docker build command.
Tag and Push Your Image:

Tag your Docker image with your Dockerhub username and the repository name using docker tag.
Log in to Dockerhub using docker login.
Push your Docker image to Dockerhub using docker push.
Documenting the Process on Your Blog

Create a *New Blog Post:

Create a new Markdown file in your Jekyll _posts directory with a filename in the format YYYY-MM-DD-title.md (e.g., 2024-04-23-setting-up-jekyll-blog.md).
Document the Steps:

Write a detailed explanation of the steps involved in setting up your blog and uploading Docker images.
Include instructions for:
Installing Jekyll
Customizing your site
Testing locally
Enabling GitHub Pages
Uploading Docker images (building, tagging, logging in, and pushing)
Include Screenshots:

Take screenshots of relevant steps, such as your GitHub repository settings and Docker commands.
Embed these screenshots in your blog post for visual reference.
Publish Your Blog Post:

Commit and push your blog post Markdown file to your GitHub repository.
GitHub Pages will automatically publish your post to your live site.
Share Your Blog Post:

Share the link to your blog post on social media or other platforms to reach a wider audience.
By following these steps, you can create a blog using Jekyll and GitHub Pages, as well as upload container images to Dockerhub. Remember to replace placeholders like <username> with your actual information.
