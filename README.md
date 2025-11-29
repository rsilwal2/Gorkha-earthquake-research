# Gorkha Earthquake Research Website

A professional website showcasing research on "Studying Co-Seismic Deformation of the 2015 Gorkha Earthquake Using Radar Remote Sensing" by Rajesh Silwal.

## Features

- **Modern, Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Fixed navbar with smooth scrolling to sections
- **Interactive Elements**: Hover effects and animations for better user experience
- **Professional Layout**: Clean, academic-style presentation suitable for research projects
- **Results Gallery**: Placeholder sections ready for your research images, maps, and figures

## File Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # Styling and layout
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Sections

1. **Hero Section**: Eye-catching introduction with project title and author
2. **Abstract**: Complete research abstract
3. **Methodology**: Six key methodological approaches with icons
4. **Results**: Gallery for research results and key findings
5. **Conclusions**: Three main conclusion categories

## Customization

### Adding Your Results Images

To add your research images, replace the placeholder divs in the Results section:

```html
<div class="result-placeholder">
    <!-- Replace this with: -->
    <img src="path/to/your/image.jpg" alt="Description">
</div>
```

### Updating Colors

Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #0f172a;  /* Dark text color */
    --accent-color: #f59e0b;     /* Accent color */
}
```

### Adding More Sections

Simply add new sections following the existing pattern:

```html
<section id="your-section" class="section">
    <div class="container">
        <h2 class="section-title">Your Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Usage

1. Open `index.html` in a web browser
2. For local development, you can use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

## Notes

- The website uses Google Fonts (Inter) - ensure internet connection for font loading
- All images in the Results section are placeholders - replace them with your actual research images
- The design is optimized for academic/research presentation

## License

This website template is created for the Gorkha Earthquake Research project.

