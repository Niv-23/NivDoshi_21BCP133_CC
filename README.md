# Sharing My Journey: Setting Up a Blog with GitHub Pages, Jekyll, and Docker

Hello everyone! My name is Niv Doshi, and I'm thrilled to share my journey into the world of cloud computing and blogging with you. As part of my university's cloud computing assignment, I embarked on a mission to create my very first blog using GitHub, Docker, and Jekyll. In this blog post, I'll walk you through the steps I took to set up my blog, upload container images to Dockerhub, and document the entire process. So, let's dive in!


## Creating the Basic Website

To kick things off, I started by creating a basic website using HTML, CSS, and JavaScript. This website served as the foundation for my blog, which I could later host.
my blog posts and showcase my projects.

After creating the basic website, I created another website and hosted it then committed the code to a GitHub repository, following the instructions provided by my university.


## Containerizing with Docker

Containerizing with Docker was a pivotal step in my journey, making deploying and managing my website simpler. Let's delve into the process:

### 1. Crafting the Dockerfile

I created a special file called a Dockerfile to kickstart the containerization process. This file served as the blueprint for building my container image. Think of it as a set of instructions telling Docker exactly how to package up my website.

### 2. Building the Image

With the Dockerfile in place, I invoked the mighty docker build command. This command worked its magic, meticulously following the instructions laid out in the Dockerfile to construct a pristine Docker image. This image contained all the necessary components of my website, neatly bundled up and ready to go.

### 3. Running the Container

Once the image was built, it was time to put it to the test. I fired up a Docker container using the trusty docker run command. This action spun up a virtual environment – a sort of mini-computer – where my website could run independently. Testing my website within this container allowed me to ensure everything was working smoothly before setting sail into the vast ocean of the internet.

By containerizing my website with Docker, I not only simplified the deployment process but also gained greater control and flexibility over its management. It was like encapsulating my website in a protective bubble, shielding it from the complexities of different computing environments. With Docker as my trusty companion, I was ready to navigate the turbulent waters of cyberspace with confidence.


## Pushing to GitHub and Dockerhub

After successfully containerizing my website, the next step was to share it with the world by pushing the code to GitHub and uploading the Docker image to Dockerhub. Here's how I accomplished this:

### 1. GitHub: Sharing the Code

To begin, I used Git commands to push the code to my GitHub repository. This simple yet crucial step ensured that my website code was securely stored and easily accessible on GitHub. By pushing the code to GitHub, I made it possible for others to view, collaborate, and contribute to my project.

### 2. Dockerhub: Uploading the Docker Image

Once my website code was safely nestled in its GitHub repository, it was time to take the Docker image for a spin on Dockerhub. Here's the process I followed:

**a. Tagging the Docker Image**

First, I tagged the Docker image with my Dockerhub username and repository name. This tagging process helped Dockerhub identify and organize my image within its vast repository of containers.

**b. Logging in to Dockerhub**

With the image tagged and ready to go, I logged in to Dockerhub using the **docker login** command. This step authenticated my identity and allowed me to access my Dockerhub account securely.

**c. Pushing the Docker Image**
With all systems ago, I pushed the Docker image to Dockerhub using the **docker push** command. This action uploaded my container image to Dockerhub, making it available for deployment and sharing with others.

By following these steps, I not only made my website code accessible on GitHub but also uploaded the containerized version of my website to Dockerhub. This ensured that my website was ready to set sail into the vast seas of the internet, accessible to users far and wide.

## Documenting the Journey

Finally, I documented my entire journey in this blog post to share my experiences and learnings with others. I included step-by-step instructions, code snippets, and screenshots to make it easier for readers to follow along.

And there you have it – my first blog post documenting my journey into cloud computing and blogging with GitHub, Docker, and Jekyll. I'm excited to continue exploring these technologies and sharing more insights with you in the future. Stay tuned for more updates on my blog!

If you'd like to learn more about how to set up a blog using GitHub Pages and Jekyll, I highly recommend checking out the resources available online. Happy blogging!
