import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const galleryItems = [
  { id: 1, category: 'events', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, category: 'clubs', image: 'https://instagram.fpat2-5.fna.fbcdn.net/v/t39.30808-6/426526017_782810800541528_6311780189719782357_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjIwNDh4MTM2NS5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fpat2-5.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QFkeHOSFwdKtZSAUJmOwMWfFCrUKf6fv98rKgLu6YMC5lhVHU8BG4viH_fN1MEpCrU&_nc_ohc=RZ-hvtWNUBEQ7kNvwGLYIKi&_nc_gid=sQ-dzG4AMmuh5oi9UL9Q7Q&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMzIzMzgwNDI0ODQwODI0Nw%3D%3D.3-ccb7-5&oh=00_AfTWJY053o1E-NCTpelDL4QtamPqzijc-MhcnlAkEPtvMw&oe=68871644&_nc_sid=10d13b' },
  { id: 3, category: 'sports', image: 'https://www.cimage.in/sitepanel/uploads/cimage_event/10%20(1).jpg' },
  { id: 4, category: 'events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 5, category: 'clubs', image: 'https://instagram.fpat2-5.fna.fbcdn.net/v/t39.30808-6/426514517_782810680541540_1757122101104534186_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjIwNDh4MTM2NS5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fpat2-5.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QH7TRLoufmBYD9UuYJynF8z0f8T4DBK_Yovz_XFAfeWI8HHylfZ79ZDZJlT0pW_Wj4&_nc_ohc=OXgcBF1UN34Q7kNvwHGwuTW&_nc_gid=KDxSoTYd75iqOn4rD4-VqA&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMwMzIzMzgwNDMwNzA2NzIxNQ%3D%3D.3-ccb7-5&oh=00_AfQbh6LayN0sp_WdF2H9u2nYOeog6GBsT8Qu1WUAZlWd-A&oe=68872C50&_nc_sid=10d13b' },
  { id: 6, category: 'sports', image: 'https://www.cimage.in/sitepanel/uploads/cimage_event/426061371_775917417897533_3763743187655767495_n.jpg' },
];

const MediaGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredGallery =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const filters = ['all', 'events', 'clubs', 'sports'];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Campus <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the vibrant life at our college
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              } transition-colors duration-300`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={`Campus ${item.category}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  <h3 className="font-bold capitalize">{item.category}</h3>
                </div>
              </div>
              {item.id === 5 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
