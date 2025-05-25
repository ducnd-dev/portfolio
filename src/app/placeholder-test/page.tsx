'use client';

import ProjectImagePlaceholder from '../../components/ui/ProjectImagePlaceholder';

export default function PlaceholderTestPage() {
  const categories = ['frontend', 'backend', 'fullstack'];
  const titles = ['ADVISER', 'GEOMARK', 'LMS', 'CTV24H', 'ELEARNING', 'TANZANIA SHOP', 'THE BODY SHOP'];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Project Image Placeholder Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {titles.map((title, i) => {
          // Cycle through the different categories
          const category = categories[i % categories.length];
          
          return (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 w-full">
                <ProjectImagePlaceholder 
                  title={title} 
                  category={category}
                  className="h-full"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-500">{category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
