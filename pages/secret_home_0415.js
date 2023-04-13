import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import presentImage from '../public/present.jpg'

export default function Home() {
  const [userName, setUserName] = useState('');
  const [dissolve, setDissolve] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalDissolve, setModalDissolve] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    const secretName = process.env.NEXT_PUBLIC_SECRET_NAME;
    if (name && name === secretName) {
      setUserName(name);
      setDissolve(true);
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    // Get the user's name from the browser's localStorage
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
      setDissolve(true);
    }
    else {
      router.push('/');
    }
  }, []);

  const pages = [
    {
      title: 'Notice #1 : Notice for Successful Test Takers',
      content: (<div>
        We are pleased to inform you that you have been selected as a test taker. You may have received an email notification to this effect. We would like to offer our sincere congratulations on your successful completion of the test.
        <br/><br/>
        Although the test scope is not yet available to the public, we have established a list of prizes based on the test results, as follows:
        <br/><br/>
        <li>**** Case</li>
        <li>****</li>
        <li>**** Mask</li>
        <li>**** ...tor</li>
        <li>*** Metal ***</li>
        <li>****</li>
        <li>****s</li>
        <br/>
        Tomorrow, we plan to upload a notice with the test scope and photos of the prizes on this website.
        <br/><br/>
        Thank you.
        <br/><br/>
        Test Management Department.
      </div>)
    },
    {
      title: 'Notice #2 : Gift image (example)',
      content: (<div>
        <div className='content-center'>
          <Image
            src={presentImage}
            width={390}
            height={0}
            alt="present image"
          />
        </div>
      </div>)
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  
  const handleDelete = () => {
    setShowDeleteModal(true);
    setTimeout(() => setModalDissolve(true), 50);
  };
  
  const handleDeleteConfirm = () => {
    localStorage.removeItem('userName');
    router.push('/');
  };

  return (
    <>
      <div className="bg-[#1E2130] text-white min-h-screen font-noto-sans">
        <div className={`container mx-auto px-8 pt-8 pb-8 ${dissolve ? 'dissolve show' : 'dissolve'}`}>
          {/* Section 1: Title */}
          <div className="border-2 border-white p-4 my-4">
            <h1 className="text-2xl">{pages[currentPage].title}</h1>
          </div>

          {/* Section 2: Name */}
          <div className="border-2 border-white p-4 my-4">
            <h2 className="text-xl">Hello,{userName}!</h2>
          </div>

          {/* Section 3: Context */}
          <div className={`border-2 border-white p-4 my-4`}>
            <div className={`text-sm mb-2 mt-2 text-container`}>{pages[currentPage].content}</div>
          </div>

          {/* Section 4: Footer */}
          <div className="border-2 border-white p-4 my-4">
            <footer>
              <p className="text-sm">&copy; 2023 Test Management Department. All Rights Reserved.</p>
            </footer>
          </div>
          <div className='flex justify-between'>
            <div className="flex">
              <button
                className={`bg-white text-black rounded px-4 py-2 mr-2 ${currentPage === 0 ? 'opacity-40' : 'opacity-100'}`}
                onClick={() => setCurrentPage((currentPage - 1))}
                disabled={currentPage === 0}
              >
                &larr;
              </button>
              <button
                className={`bg-white text-black rounded px-4 py-2 ${currentPage === pages.length-1 ? 'opacity-40' : 'opacity-100'}`}
                onClick={() => setCurrentPage((currentPage + 1))}
                disabled={currentPage === pages.length-1}
              >
                &rarr;
              </button>
            </div>
            {showDeleteModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className={`bg-white p-6 rounded shadow-lg text-black ${modalDissolve ? 'dissolveModal show' : 'dissolveModal'}`}>
                  <h2 className="text-2xl mb-4">Are you sure you want to delete your name?</h2>
                  <button className="bg-green-500 text-white rounded px-4 py-2 mr-2" onClick={handleDeleteConfirm}>
                    Yes
                  </button>
                  <button className="bg-red-500 text-white rounded px-4 py-2" onClick={() => setShowDeleteModal(false)}>
                    No
                  </button>
                </div>
              </div>
            )}
            <button
              className="bg-red-500 text-white rounded px-4 py-2"
              onClick={handleDelete}
            >
              Delete Name
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
