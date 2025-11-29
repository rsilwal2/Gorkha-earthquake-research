# Publishing Your Website to GitHub Pages

This guide will help you publish your website to GitHub and make it publicly accessible.

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in to your account
2. Click the **+** icon in the top right corner and select **New repository**
3. Fill in the details:
   - **Repository name**: `gorkha-earthquake-research` (or any name you prefer)
   - **Description**: "Co-Seismic Deformation of the 2015 Gorkha Earthquake - Radar Remote Sensing"
   - **Public** (select this so it's visible to everyone)
   - **Initialize with README** (optional)
4. Click **Create repository**

## Step 2: Install Git on Your Computer

If you haven't already:
1. Download Git from [git-scm.com](https://git-scm.com/)
2. Install it (accept default settings)
3. Restart your computer

## Step 3: Open PowerShell in Your Project Folder

1. Navigate to `d:\1_third_sem\RS\website` in File Explorer
2. Right-click in empty space and select **Open PowerShell window here**

## Step 4: Initialize Git and Configure It

Run these commands in PowerShell:

```powershell
# Configure Git with your GitHub username and email
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"

# Initialize your local repository
git init

# Add all files to staging
git add .

# Create first commit
git commit -m "Initial commit: Gorkha earthquake research website"
```

## Step 5: Connect to GitHub and Push

Run these commands (replace placeholders with your actual values):

```powershell
# Add the remote repository (copy the URL from your GitHub repository page)
git remote add origin https://github.com/YOUR_USERNAME/gorkha-earthquake-research.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

You may be prompted to sign in to GitHub. Click the authorization prompt that appears.

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main" and "/ (root)"
5. Click **Save**

GitHub will build your site (takes 1-2 minutes). Once complete, you'll see:
```
Your site is live at: https://YOUR_USERNAME.github.io/gorkha-earthquake-research/
```

## Step 7: Access Your Website

Your website will be publicly available at:
```
https://YOUR_USERNAME.github.io/gorkha-earthquake-research/
```

Share this link with anyone to let them view your research!

## Making Future Updates

After you make changes to your website:

```powershell
# Check what changed
git status

# Add changes
git add .

# Commit with a message
git commit -m "Update: Fixed typo in conclusions section"

# Push to GitHub
git push
```

GitHub Pages will automatically update your live site within 1-2 minutes.

## Useful GitHub Commands

```powershell
# View commit history
git log

# Check current status
git status

# View what's staged
git diff --staged

# Undo changes to a file
git checkout -- filename.html
```

## Troubleshooting

**Problem**: "failed to push" error
- Solution: Make sure you're signed in and have internet connection

**Problem**: Changes don't appear on live site
- Solution: Wait 1-2 minutes and refresh your browser (use Ctrl+Shift+R for hard refresh)

**Problem**: Authentication keeps asking for password
- Solution: Use GitHub Personal Access Token instead of password (Settings → Developer settings → Personal access tokens)

## Need Help?

- GitHub Help: https://docs.github.com/en
- Git Basics: https://git-scm.com/doc
- GitHub Pages: https://pages.github.com/

Good luck publishing your research! 🚀
