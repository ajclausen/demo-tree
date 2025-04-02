import React from 'react';

export default function Gallery() {
  const images = [
    {
      id: 1,
      url: '/gallery/Complete-Tree-Care-Company-Indianapolis.jpg',
      caption: 'Complete Tree Care Company Indianapolis'
    },
    {
      id: 2,
      url: '/gallery/Complete-Tree-Care-Fleet.jpg',
      caption: 'Our Professional Tree Service Fleet'
    },
    {
      id: 3,
      url: '/gallery/Complete-Tree-Care-Indianapolis1.jpg',
      caption: 'Tree Care Services in Indianapolis'
    },
    {
      id: 4,
      url: '/gallery/Complete-Tree-Care-Service-Indianapolis-IN.jpg',
      caption: 'Our Tree Service Team'
    },
    {
      id: 5,
      url: '/gallery/Complete-Tree-Care-Service-Indy.jpg',
      caption: 'Professional Tree Service in Indy'
    },
    {
      id: 6,
      url: '/gallery/Complete-Tree-Care-Staff.jpg',
      caption: 'Our Dedicated Tree Care Staff'
    },
    {
      id: 7,
      url: '/gallery/Complete-Tree-Care-Tree-Removal-Service.jpg',
      caption: 'Professional Tree Removal Service'
    },
    {
      id: 8,
      url: '/gallery/complete-tree-care.jpg',
      caption: 'Complete Tree Care Services'
    },
    {
      id: 9,
      url: '/gallery/Emergency-Tree-Removal-Company-Near-Me-Indianapolis.jpg',
      caption: 'Emergency Tree Removal Service'
    },
    {
      id: 10,
      url: '/gallery/Indianapolis-IN-Tree-Removal-Contractors.jpg',
      caption: 'Indianapolis Tree Removal Contractors'
    },
    {
      id: 11,
      url: '/gallery/Indianapolis-tree-removal.jpg',
      caption: 'Tree Removal in Indianapolis'
    },
    {
      id: 12,
      url: '/gallery/Indianapolis-Tree-Service-Contractors.jpg',
      caption: 'Professional Tree Service Contractors'
    },
    {
      id: 13,
      url: '/gallery/Indianapolis-Tree-Service.jpg',
      caption: 'Specialized Tree Service in Indianapolis'
    },
    {
      id: 14,
      url: '/gallery/Indy-Tree-Service.jpg',
      caption: 'Indy Tree Service Professionals'
    },
    {
      id: 15,
      url: '/gallery/Local-Tree-Service-Contractors-Indianapolis.jpg',
      caption: 'Local Tree Service Contractors'
    },
    {
      id: 16,
      url: '/gallery/Professional-Tree-Service-Near-Me-Indianapolis-IN.jpg',
      caption: 'Professional Tree Service in Indianapolis'
    },
    {
      id: 17,
      url: '/gallery/Remove-Fallen-Tree-Indianapolis-IN.jpg',
      caption: 'Fallen Tree Removal Service'
    },
    {
      id: 18,
      url: '/gallery/Storm-Damage-Tree-Removal-Indianapolis-IN.jpg',
      caption: 'Storm Damage Tree Removal'
    },
    {
      id: 19,
      url: '/gallery/Tree-Damage-Repair-Indianapolis.jpg',
      caption: 'Tree Damage Repair Services'
    },
    {
      id: 20,
      url: '/gallery/Tree-Fell-Over-Indianapolis-Indiana.jpg',
      caption: 'Emergency Fallen Tree Removal'
    },
    {
      id: 21,
      url: '/gallery/Tree-Removal-Near-Me-Indianapolis-IN.jpg',
      caption: 'Tree Removal Service Near You'
    },
    {
      id: 22,
      url: '/gallery/Tree-Removal-Service-Cheap-Indianapolis.jpg',
      caption: 'Affordable Tree Removal Service'
    },
    {
      id: 23,
      url: '/gallery/tree-service-company.jpg',
      caption: 'Professional Tree Service Company'
    },
    {
      id: 24,
      url: '/gallery/tree-service-Indiana.jpg',
      caption: 'Complete Tree Service in Indiana'
    },
    {
      id: 25,
      url: '/gallery/Tree-Work-Company-Indianapolis-IN.jpg',
      caption: 'Tree Work Company in Indianapolis'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/gallery/Complete-Tree-Care-Tree-Removal-Service.jpg")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Work Gallery</h1>
          <p className="text-xl md:text-2xl mb-8">See our expertise in action</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div key={image.id} className="relative group">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 font-semibold">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}