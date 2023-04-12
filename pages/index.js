export default function Home() {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
      </Head>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Section 1: Title */}
          <div className="border-2 border-white p-4 my-4">
            <h1 className="text-3xl">Section Title</h1>
          </div>

          {/* Section 2: Name */}
          <div className="border-2 border-white p-4 my-4">
            <h2 className="text-2xl">Hello, [Your Name]!</h2>
          </div>

          {/* Section 3: Context */}
          <div className="border-2 border-white p-4 my-4">
            <p className="text-lg">
              This is the context section where you can write your content. You can add any text, images, or other elements here.
            </p>
          </div>

          {/* Section 4: Footer */}
          <div className="border-2 border-white p-4 my-4">
            <footer>
              <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
