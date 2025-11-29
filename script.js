// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.method-card, .result-item, .conclusion-card, .key-findings');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveNav() {
    let current = '';
    const scrollY = window.pageYOffset;
    const navbarHeight = 80;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    // Handle home section separately (when at top of page)
    if (scrollY < 100) {
        current = 'home';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || (current === 'home' && href === '#home')) {
            link.classList.add('active');
        }
    });
}

// Update on scroll
window.addEventListener('scroll', updateActiveNav);

// Update on page load
document.addEventListener('DOMContentLoaded', updateActiveNav);

// Update after smooth scroll
window.addEventListener('scrollend', updateActiveNav);

// Image Modal/Lightbox for Subswath Images
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.modal-close');

// Open modal when clicking on subswath items
const openModalWithImage = (imageSrc, imageLabel) => {
    modalImage.src = imageSrc;
    modalCaption.textContent = imageLabel || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

document.querySelectorAll('.subswath-item').forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('data-image');
        const imageLabel = item.getAttribute('data-label');
        openModalWithImage(imageSrc, imageLabel);
    });
});

document.querySelectorAll('.interferogram-item').forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('data-image');
        const imageLabel = item.getAttribute('data-label');
        openModalWithImage(imageSrc, imageLabel);
    });
});

document.querySelectorAll('.trend-thumb').forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('data-image');
        const imageLabel = item.getAttribute('data-label');
        openModalWithImage(imageSrc, imageLabel);
    });
});

const ionosphericFigure = document.querySelector('.ionospheric-figure');
if (ionosphericFigure) {
    ionosphericFigure.addEventListener('click', () => {
        const imageSrc = ionosphericFigure.getAttribute('data-image');
        const imageLabel = ionosphericFigure.getAttribute('data-label');
        openModalWithImage(imageSrc, imageLabel);
    });
    ionosphericFigure.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const imageSrc = ionosphericFigure.getAttribute('data-image');
            const imageLabel = ionosphericFigure.getAttribute('data-label');
            openModalWithImage(imageSrc, imageLabel);
        }
    });
}

const splitSpectrumFigure = document.querySelector('.split-spectrum-figure');
if (splitSpectrumFigure) {
    splitSpectrumFigure.addEventListener('click', () => {
        const imageSrc = splitSpectrumFigure.getAttribute('data-image');
        const imageLabel = splitSpectrumFigure.getAttribute('data-label');
        openModalWithImage(imageSrc, imageLabel);
    });
    splitSpectrumFigure.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const imageSrc = splitSpectrumFigure.getAttribute('data-image');
            const imageLabel = splitSpectrumFigure.getAttribute('data-label');
            openModalWithImage(imageSrc, imageLabel);
        }
    });
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});

// Leaflet-based Results map and KMZ/KML overlay (no API key required)
document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('resultsMap');
    if (!mapElement || typeof L === 'undefined') return;

    const kathmandu = [27.7172, 85.3240];
    const map = L.map(mapElement).setView(kathmandu, 7);

    // Layer definitions
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    });

    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: '&copy; Esri, DigitalGlobe, Earthstar Geographics'
    });

    // Add default layer
    osmLayer.addTo(map);

    // Map type selector
    const mapTypeSelect = document.getElementById('mapType');
    if (mapTypeSelect) {
        mapTypeSelect.addEventListener('change', (evt) => {
            if (evt.target.value === 'osm') {
                map.removeLayer(satelliteLayer);
                osmLayer.addTo(map);
            } else if (evt.target.value === 'satellite') {
                map.removeLayer(osmLayer);
                satelliteLayer.addTo(map);
            }
        });
    }

    // study area marker removed per user request

    const toAbsoluteUrl = (path) => {
        if (!path) return '';
        try {
            return new URL(path, window.location.href).href;
        } catch (err) {
            console.warn('Unable to resolve layer path', err);
            return '';
        }
    };

    const mapElementDataset = mapElement.dataset || {};
    const losUrl = toAbsoluteUrl(mapElementDataset.losLayer || 'images/los.kmz');
    const intUrl = toAbsoluteUrl('images/int.kmz');
    const ksnUrl = toAbsoluteUrl('images/ksn.kmz');

    let losLayer = null;
    let intLayer = null;
    let ksnLayer = null;

    const defaultStyle = (feature) => ({
        color: '#d62728',
        weight: 2,
        fillColor: '#ff7f0e',
        fillOpacity: 0.35
    });

    const pointToLayer = (feature, latlng) => L.circleMarker(latlng, {
        radius: 5,
        fillColor: '#d62728',
        color: '#fff',
        weight: 1,
        fillOpacity: 1
    });

    const tryLoadKmlOrKmzToLeaflet = async (url) => {
        if (!url) return null;
        try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error('Fetch failed: ' + resp.status);

            const contentType = (resp.headers.get('content-type') || '').toLowerCase();

            // KMZ (zip) handling
            if (url.toLowerCase().endsWith('.kmz') || contentType.includes('zip') || contentType.includes('kmz')) {
                const arrayBuffer = await resp.arrayBuffer();
                return await loadKmzArrayBufferToLayer(arrayBuffer);
            }

            // KML handling
            if (url.toLowerCase().endsWith('.kml') || contentType.includes('xml') || contentType.includes('kml')) {
                const kmlText = await resp.text();
                const parser = new DOMParser();
                const kmlDom = parser.parseFromString(kmlText, 'text/xml');

                // If KML contains GroundOverlay, try to read and render it (image must be remote-accessible)
                const groundOverlays = kmlDom.getElementsByTagName('GroundOverlay');
                if (groundOverlays && groundOverlays.length > 0) {
                    const group = L.layerGroup();
                    for (let i = 0; i < groundOverlays.length; i++) {
                        const go = groundOverlays[i];
                        const hrefEl = go.getElementsByTagName('href')[0];
                        const latLonBox = go.getElementsByTagName('LatLonBox')[0];
                        if (!hrefEl || !latLonBox) continue;
                        const href = hrefEl.textContent.trim();
                        const north = parseFloat(latLonBox.getElementsByTagName('north')[0].textContent);
                        const south = parseFloat(latLonBox.getElementsByTagName('south')[0].textContent);
                        const east = parseFloat(latLonBox.getElementsByTagName('east')[0].textContent);
                        const west = parseFloat(latLonBox.getElementsByTagName('west')[0].textContent);
                        const bounds = [[south, west], [north, east]];
                        try {
                            const imgOverlay = L.imageOverlay(href, bounds, { opacity: 0.8 });
                            imgOverlay.addTo(group);
                        } catch (e) {
                            console.warn('Failed to add remote GroundOverlay image:', e);
                        }
                    }
                    return group;
                }

                const geojson = toGeoJSON.kml(kmlDom);
                const layer = L.geoJSON(geojson, { style: defaultStyle, pointToLayer });
                return layer;
            }

            // Unknown type: try as KMZ (arrayBuffer path)
            try {
                const arrayBuffer = await resp.arrayBuffer();
                return await loadKmzArrayBufferToLayer(arrayBuffer);
            } catch (e) {
                console.warn('Unsupported layer type or empty KMZ/KML', e);
                return null;
            }
        } catch (err) {
            console.warn('Unable to load KMZ/KML:', err);
            return null;
        }
    };

    // Helper: parse KMZ arrayBuffer and return a Leaflet layer (handles GroundOverlay or placemarks)
    const loadKmzArrayBufferToLayer = async (arrayBuffer) => {
        try {
            const zip = await JSZip.loadAsync(arrayBuffer);
            const filesInZip = Object.keys(zip.files);
            console.log('Files in KMZ:', filesInZip);
            
            const kmlName = filesInZip.find(n => n.toLowerCase().endsWith('.kml'));
            if (!kmlName) {
                console.error('No KML file found in KMZ. Files:', filesInZip);
                throw new Error('No KML file found inside KMZ');
            }
            console.log('Found KML file:', kmlName);
            
            const kmlText = await zip.file(kmlName).async('text');
            const parser = new DOMParser();
            const kmlDom = parser.parseFromString(kmlText, 'text/xml');

            // If GroundOverlay(s) exist, extract images and create ImageOverlays
            const groundOverlays = kmlDom.getElementsByTagName('GroundOverlay');
            console.log('Number of GroundOverlays found:', groundOverlays.length);
            
            if (groundOverlays && groundOverlays.length > 0) {
                const group = L.layerGroup();
                for (let i = 0; i < groundOverlays.length; i++) {
                    const go = groundOverlays[i];
                    const hrefEl = go.getElementsByTagName('href')[0];
                    const latLonBox = go.getElementsByTagName('LatLonBox')[0];
                    if (!hrefEl || !latLonBox) continue;
                    const href = hrefEl.textContent.trim();
                    console.log('GroundOverlay ' + i + ' image href:', href);

                    // Find image inside KMZ (match by filename)
                    const imageFilename = href.split('/').pop().toLowerCase();
                    const imageNameCandidates = filesInZip.filter(n => n.toLowerCase().endsWith(imageFilename));
                    console.log('Looking for image:', imageFilename, '| Candidates:', imageNameCandidates);
                    
                    let imageBlobUrl = null;
                    if (imageNameCandidates.length > 0) {
                        const imgName = imageNameCandidates[0];
                        try {
                            const imgBuffer = await zip.file(imgName).async('arraybuffer');
                            const blob = new Blob([imgBuffer]);
                            imageBlobUrl = URL.createObjectURL(blob);
                            console.log('Successfully extracted image:', imgName);
                        } catch (e) {
                            console.warn('Failed to extract overlay image from KMZ:', e);
                        }
                    }

                    const north = parseFloat(latLonBox.getElementsByTagName('north')[0].textContent);
                    const south = parseFloat(latLonBox.getElementsByTagName('south')[0].textContent);
                    const east = parseFloat(latLonBox.getElementsByTagName('east')[0].textContent);
                    const west = parseFloat(latLonBox.getElementsByTagName('west')[0].textContent);
                    const bounds = [[south, west], [north, east]];
                    console.log('GroundOverlay bounds:', bounds);

                    const imageUrlToUse = imageBlobUrl || href;
                    if (imageUrlToUse) {
                        const imgOverlay = L.imageOverlay(imageUrlToUse, bounds, { opacity: 0.8 });
                        imgOverlay.addTo(group);
                        console.log('ImageOverlay added to map');
                    }
                }
                return group;
            }

            // Otherwise fallback to GeoJSON conversion (placemarks)
            console.log('No GroundOverlays found; converting placemarks to GeoJSON');
            const placemarks = kmlDom.getElementsByTagName('Placemark');
            console.log('Number of Placemarks found:', placemarks.length);
            
            const geojson = toGeoJSON.kml(kmlDom);
            console.log('GeoJSON created with features:', geojson.features ? geojson.features.length : 0);
            
            const layer = L.geoJSON(geojson, { style: defaultStyle, pointToLayer });
            return layer;
        } catch (e) {
            console.error('Failed to parse KMZ arrayBuffer:', e);
            return null;
        }
    };

    // Overlay status UI elements (removed status display per user request)
    const setOverlayStatus = (text, state) => {
        // Status display removed
    };

    // Load layers on demand (when checkbox is clicked)
    const loadLayerIfNeeded = async (layerName, url) => {
        let layer = null;
        if (layerName === 'los' && !losLayer) {
            console.log('Loading LOS from:', url);
            losLayer = await tryLoadKmlOrKmzToLeaflet(url);
            return losLayer;
        } else if (layerName === 'int' && !intLayer) {
            console.log('Loading INT from:', url);
            intLayer = await tryLoadKmlOrKmzToLeaflet(url);
            return intLayer;
        } else if (layerName === 'ksn' && !ksnLayer) {
            console.log('Loading KSN from:', url);
            ksnLayer = await tryLoadKmlOrKmzToLeaflet(url);
            return ksnLayer;
        }
        return layer;
    };

    // Toggle visibility of LOS layer
    const toggleLos = document.getElementById('toggleLos');
    if (toggleLos) {
        toggleLos.addEventListener('change', async (evt) => {
            if (evt.target.checked) {
                if (!losLayer) {
                    losLayer = await loadLayerIfNeeded('los', losUrl);
                }
                if (losLayer && map && !map.hasLayer(losLayer)) {
                    losLayer.addTo(map);
                }
            } else {
                if (losLayer && map && map.hasLayer(losLayer)) {
                    map.removeLayer(losLayer);
                }
            }
        });
    }

    // Toggle visibility of INT layer
    const toggleInt = document.getElementById('toggleInt');
    if (toggleInt) {
        toggleInt.addEventListener('change', async (evt) => {
            if (evt.target.checked) {
                if (!intLayer) {
                    intLayer = await loadLayerIfNeeded('int', intUrl);
                }
                if (intLayer && map && !map.hasLayer(intLayer)) {
                    intLayer.addTo(map);
                }
            } else {
                if (intLayer && map && map.hasLayer(intLayer)) {
                    map.removeLayer(intLayer);
                }
            }
        });
    }

    // Toggle visibility of KSN layer
    const toggleKsn = document.getElementById('toggleKsn');
    if (toggleKsn) {
        toggleKsn.addEventListener('change', async (evt) => {
            if (evt.target.checked) {
                if (!ksnLayer) {
                    ksnLayer = await loadLayerIfNeeded('ksn', ksnUrl);
                }
                if (ksnLayer && map && !map.hasLayer(ksnLayer)) {
                    ksnLayer.addTo(map);
                }
            } else {
                if (ksnLayer && map && map.hasLayer(ksnLayer)) {
                    map.removeLayer(ksnLayer);
                }
            }
        });
    }
});

