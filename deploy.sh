#!/bin/bash

# AustinIPA Website Deployment Script
# This script helps you deploy your website to GitHub

echo "╔══════════════════════════════════════════════════════════╗"
echo "║     AustinIPA Website Deployment to GitHub              ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Navigate to the project directory
cd "$(dirname "$0")"

echo -e "${BLUE}📂 Current directory: $(pwd)${NC}"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}🔧 Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
else
    echo -e "${GREEN}✓ Git already initialized${NC}"
fi

echo ""

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Remote origin already configured${NC}"
    echo -e "   Remote URL: $(git remote get-url origin)"
else
    echo -e "${YELLOW}🔧 Adding remote origin...${NC}"
    git remote add origin https://github.com/masoud-heydari/AustinIPA.git
    echo -e "${GREEN}✓ Remote origin added${NC}"
fi

echo ""

# Stage all files
echo -e "${BLUE}📦 Staging files...${NC}"
git add .
echo -e "${GREEN}✓ Files staged${NC}"

echo ""

# Get commit message from user or use default
echo -e "${YELLOW}💬 Enter commit message (or press Enter for default):${NC}"
read -r COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Update AustinIPA website - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Commit changes
echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "$COMMIT_MSG"
echo -e "${GREEN}✓ Changes committed${NC}"

echo ""

# Ask about branch
echo -e "${YELLOW}🌿 Ensure we're on main branch...${NC}"
git branch -M main
echo -e "${GREEN}✓ On main branch${NC}"

echo ""

# Ask user if they want to push
echo -e "${YELLOW}🚀 Ready to push to GitHub?${NC}"
echo -e "${YELLOW}   This will update your repository at:${NC}"
echo -e "${BLUE}   https://github.com/masoud-heydari/AustinIPA${NC}"
echo ""
echo -e "${YELLOW}⚠️  Warning: This will overwrite the remote repository!${NC}"
echo -e "${YELLOW}   Type 'yes' to continue or anything else to cancel:${NC}"
read -r CONFIRM

if [ "$CONFIRM" = "yes" ]; then
    echo ""
    echo -e "${BLUE}📤 Pushing to GitHub...${NC}"
    
    # Try normal push first
    if git push -u origin main 2>/dev/null; then
        echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
    else
        # If normal push fails, ask about force push
        echo ""
        echo -e "${YELLOW}⚠️  Normal push failed. This usually means remote has different content.${NC}"
        echo -e "${YELLOW}   Do you want to force push? (This will overwrite remote)${NC}"
        echo -e "${YELLOW}   Type 'force' to force push:${NC}"
        read -r FORCE_CONFIRM
        
        if [ "$FORCE_CONFIRM" = "force" ]; then
            git push -u origin main --force
            echo -e "${GREEN}✓ Force pushed to GitHub!${NC}"
        else
            echo -e "${RED}✗ Push cancelled${NC}"
            exit 1
        fi
    fi
    
    echo ""
    echo -e "${GREEN}╔══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              🎉 Deployment Successful! 🎉               ║${NC}"
    echo -e "${GREEN}╚══════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BLUE}📋 Next Steps:${NC}"
    echo ""
    echo -e "${YELLOW}1. Go to Cloudflare Pages:${NC}"
    echo -e "   https://dash.cloudflare.com"
    echo ""
    echo -e "${YELLOW}2. Navigate to:${NC}"
    echo -e "   Workers & Pages → Pages → Create application"
    echo ""
    echo -e "${YELLOW}3. Connect your GitHub repo:${NC}"
    echo -e "   masoud-heydari/AustinIPA"
    echo ""
    echo -e "${YELLOW}4. Configure:${NC}"
    echo -e "   - Project name: austinipa"
    echo -e "   - Branch: main"
    echo -e "   - Build command: (leave empty)"
    echo -e "   - Build output: /"
    echo ""
    echo -e "${YELLOW}5. Click 'Save and Deploy'${NC}"
    echo ""
    echo -e "${GREEN}Your site will be live in ~60 seconds! 🚀${NC}"
    echo ""
    echo -e "${BLUE}📖 For detailed instructions, see:${NC}"
    echo -e "   - QUICKSTART.md (5-minute guide)"
    echo -e "   - DEPLOYMENT.md (comprehensive guide)"
    echo ""
    
else
    echo ""
    echo -e "${RED}✗ Push cancelled by user${NC}"
    echo -e "${BLUE}ℹ️  Your changes are committed locally but not pushed.${NC}"
    echo -e "${BLUE}   Run this script again when ready to push.${NC}"
    exit 1
fi

echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo ""
