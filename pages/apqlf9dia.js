import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
      title: '[SECRET] : From Korea branch',
      content: (<div>
        <div className='xs'>[The email below was sent from the Korea branch. Please check it and translate it into English for the administrator.]</div>
        <br/>
        안녕하세요, 한국 시험 담당자입니다.
        <br/><br/>
        금번 한국 시험 변동사항에 대해 알려드립니다.
        <br/><br/>
        저희는 이번에 시험을 실시하지 않기로 하였습니다. 하지만, 이 사실이 외부에 공개되면 신청자들의 문의가 폭주할 것이므로 저희는 정상적으로 시험을 진행한다고 4월 12일 저녁에 공표할 예정입니다. 이번에 준비된 시험지와 해당 문제들은 다음 시험에 사용하도록 하겠습니다. 시험지는 곧 올려드리겠습니다.
        <br/><br/>
        어제 저녁에 본사에서 파견오신 <b><i>--Censored--</i></b>님께서도 이번 일에 동의해주셨습니다. 본사의 협조에 감사합니다.
        <br/><br/>
        참고로, 최근 내부에서 이번 결정에 대해 불만을 품은 사람들이 생기고 있으니, 내부 자료 보안에 각별히 신경써주시기 바랍니다.
        <br/><br/>
        담당자 <b><i>--Censored--</i></b>드림.
        </div>
      )
    },
    {
      title: '[SECRET] : [TRANSLATED] From Korea branch',
      content: (<div>
        Hello, this is the Korean exam coordinator.
        <br/><br/>
        We would like to inform you about the changes in the Korean exam this time.
        <br/><br/>
        We have decided not to hold the exam this time. However, since disclosing this fact to the public will lead to an overwhelming number of inquiries from applicants, we plan to announce that the exam will proceed as usual on the evening of April 12th. The prepared test papers and their respective questions will be used in the next exam. We will upload the test papers shortly.
        <br/><br/>
        <b><i>--Censored--</i></b>, who was dispatched from the headquarters last night, also agreed on this matter. We appreciate the cooperation of the headquarters.
        <br/><br/>
        Please note that there have been some people who are discontent with this decision within the organization recently, so please pay special attention to the security of internal documents.
        <br/><br/>
        From coordinator <b><i>--Censored--</i></b>.
        </div>
      )
    },
    {
      title: '안녕하세요, 이서연님.',
      content: (<div>
        안녕하세요, 이서연님.
        <br/><br/>
        제가 보내드린 여러 유출 문서와 비밀 코드를 해독하셨군요. 감사드립니다.
        <br/><br/>
        앞에서 보셨듯이, 본사와 지사는 이번 시험을 진행하지 않으려고 합니다. 하지만 저는 이것을 원하지 않기에, 서연님께 따로 이 사실을 공유드리려고 지금까지 이메일 전송과 내부 홈페이지 해킹 등을 통해 서연님께 이 사실을 알리고자 하였습니다.
        <br/><br/>
        이번에 볼 시험지는 곧 이곳에 올려드리겠습니다. 일단 시험에 응시하시면 시험은 원칙대로 진행되기에, 한국 지사측에서도 이를 막을 별도의 방법이 없습니다.
        <br/><br/>
        서버 데이터의 한계로 더 이상 내용을 적기 어려울 것 같습니다. 이 링크는 몇 시간 후 없어지게 됩니다. 조만간 이메일을 통해 다른 링크를 보내드리도록 하겠습니다. 비슷한 방법으로 암호를 풀고 들어오시면 됩니다.
        <br/><br/>
        서연님의 행운을 빕니다.
        <br/><br/>
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
