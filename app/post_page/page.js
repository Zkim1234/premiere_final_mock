'use client';

import HeaderBar from '@/ui/post-header/post-header';


export default function EventPost() {
    return (
      <div>
        <PostPage />

      </div>
    );
  }



function PostPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <HeaderBar title="Post" onBack={handleBack} />
      {/* Page content */}
    </>
  );
}


