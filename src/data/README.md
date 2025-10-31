# Braintisa Demo Data

This folder contains all the demo/sample data for the Braintisa website. Update these files to customize the content displayed on your site.

## Files Overview

### `companyData.ts`
Main company information including:
- Company name and tagline
- Contact information (email, phone, address)
- Business hours
- Company statistics
- Social media links

**How to update:** Edit the values in the exported `companyInfo` object.

### `teamData.ts`
Team member profiles including:
- Name, role, and bio
- Profile image URL
- Portfolio website link
- Skills list
- Social media links (LinkedIn, GitHub, Email)

**How to update:** 
1. Add/remove/edit objects in the `teamMembers` array
2. Update image URLs to your team members' photos
3. Update portfolio links and social media handles

### `projectsData.ts`
Featured projects/portfolio items including:
- Project title and description
- Technologies used
- Project image
- Demo and GitHub URLs

**How to update:**
1. Add/remove/edit projects in the `projects` array
2. Update image URLs to your project screenshots
3. Update demo and repository links

### `servicesData.ts`
Services offered by the company including:
- Service title and icon
- Description
- Key features list

**How to update:**
1. Add/remove/edit services in the `services` array
2. Change icons by importing different Lucide icons
3. Update features for each service

### `testimonialsData.ts`
Client testimonials including:
- Client name, role, and company
- Profile image
- Testimonial content
- Rating (1-5 stars)

**How to update:**
1. Add/remove/edit testimonials in the `testimonials` array
2. Update client information and quotes
3. Change profile images

## Quick Start

To customize all demo data:

1. **Company Info**: Start with `companyData.ts` to set your company details
2. **Team**: Update `teamData.ts` with your actual team members
3. **Projects**: Replace demo projects in `projectsData.ts` with your real work
4. **Services**: Modify `servicesData.ts` to match your offerings
5. **Testimonials**: Add real client feedback in `testimonialsData.ts`

## Image URLs

All demo data currently uses placeholder images from Unsplash. Replace these with:
- Your own hosted images
- Images from your asset management system
- Generated images using the built-in image generation tools

## Best Practices

- Keep descriptions concise and impactful
- Use high-quality images (recommended: 400x400 for profiles, 600x400 for projects)
- Ensure all external links are valid and use HTTPS
- Update portfolio links to actual team member websites
- Replace demo URLs (example.com) with real links
