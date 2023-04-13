import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import present2Image from "../public/present2.jpg"
import encryptedImage from "../public/encrypted.jpg"

export default function Home() {
  const [userName, setUserName] = useState('');
  const [dissolve, setDissolve] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalDissolve, setModalDissolve] = useState(false);
  const router = useRouter();

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
      title: '알려드립니다.',
      content: (<div>
          이 링크도 곧 사라질 수 있을 것 같습니다. 다음 두 장의 사진에 필요한 정보를 담았습니다.
          <br/><br/>
          첫번째 사진은 마지막 전달 메시지입니다. 두번째 사진은 색이 입혀진 내부 자료가 필요할 것 같아 첨부해드립니다.
          <br/><br/>
          하루정도는 이 자료를 유지하도록 하겠습니다.
          <br/><br/>
          여기로 오실 때 확인한 이메일에 IM■■E_1에 대한 정보를 담았습니다.
        </div>
      )
    },
    {
      title: 'IMAGE_1',
      content: (<div>
          <div className='content-center'>
            <Image
              src={encryptedImage}
              width={390}
              height={0}
              alt="encrypted image"
            />
          </div>
        </div>
      )
    },
    {
      title: 'IMAGE_2',
      content: (<div>
          <div className='content-center'>
            <Image
              src={present2Image}
              width={390}
              height={0}
              alt="present image"
            />
          </div>
        </div>
      )
    },
    {
      title: '감사합니다.',
      content: (<div>
          이것으로 통신을 마칩니다. 시험은 저와 뜻을 함께한 내부 요원(코드명 KYC)을 통해 서면으로 보내드리겠습니다.
          <br/><br/>
          행운을 빕니다.
          <br/><br/><br/>
          익명으로부터.
        </div>
      )
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
      <div className="bg-[#191970] text-white min-h-screen font-noto-sans">
        <div className={`container mx-auto px-8 pt-8 pb-8 ${dissolve ? 'dissolve show' : 'dissolve'}`}>
          {/* Section 1: Title */}
          <div className="border-2 border-white p-4 my-4">
            <h1 className="text-2xl">{pages[currentPage].title}</h1>
          </div>

          {/* Section 2: Name */}
          <div className="border-2 border-white p-4 my-4">
            <h2 className="text-xl">INTRANET / USER [{userName}]</h2>
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
