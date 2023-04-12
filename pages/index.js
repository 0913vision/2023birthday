export default function Home() {
  return (
    <>
      <div className="bg-[#330000] text-white min-h-screen font-noto-sans">
        <div className="container mx-auto px-4">
          {/* Section 1: Title */}
          <div className="border-2 border-white p-4 my-4">
            <h1 className="text-2xl">Section Title</h1>
          </div>

          {/* Section 2: Name */}
          <div className="border-2 border-white p-4 my-4">
            <h2 className="text-xl">Hello, [Your Name]!</h2>
          </div>

          {/* Section 3: Context */}
          <div className="border-2 border-white p-4 my-4">
            <p className="text-sm">
              This is the context section where you can write your content. You can add any text, images, or other elements here.
            </p>
          </div>

          {/* Section 4: Footer */}
          <div className="border-2 border-white p-4 my-4">
            <footer>
              <p className="text-sm">&copy; 2023 Your Company Name. All Rights Reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
