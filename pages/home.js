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
    const secretName = process.env.NEXT_PUBLIC_SECRET_NAME;
    if (name) {
      if(name && name === secretName ) {
        router.push('/secret_home_0415');
      }
      else {
        setUserName(name);
        setDissolve(true);
      }
    }
    else {
      router.push('/');
    }
  }, []);

  const pages = [
    {
      title: 'Document #1 : Guide for the Test',
      content: (<div>Thank you for participating in this test. This test is designed to assess your Korean SAT-like reasoning skills as well as your years of dating experience. The scope of the test is related to your life, and the format of the questions is typical of the Korean SAT. There is no specific time limit for the test, and we would appreciate it if you could take enough time according to your circumstances. As a reward for participating in the test, safety cases, ***, ***, ***, and other items are prepared. We wish you good luck in the upcoming test. <br/><br/>Test Management Department.</div>)
    },
    {
      title: 'Document #2 : Test Schedule Notification',
      content: (<div>We at our company wish you the utmost success and growth in your endeavors.<br/><br/>

        Regarding the test schedule, we will be adhering to our established principle. The principle is to keep the schedule confidential and share it only with select individuals, at the company's discretion. Therefore, we are unable to provide information about the test schedule here. If your name has been registered as a test-taker, you should have received a separate email with the test details. As a gesture of consideration, we have also sent an email to those who were not selected. Please check your email for further information.
        
        <br/><br/>Our company is committed to ensuring the best possible test preparation, and we extend our best wishes to all test-takers.
        
        <br/><br/>Test Management Department.</div>)
    },
    {
      title: 'Document #3 : Email Notification Sent',
      content: (<div>We at our company wish you the utmost success and growth in your endeavors.

        <br/><br/>We have sent an email to all test applicants, including registration confirmation. Please check your email for further information.
        
        <br/><br/>Test Management Department.</div>)
    },
    {
      title: '',
      content: (<div><b>----- end-of-pages -----</b></div>)
    },
    {
      title: '',
      content: '',
    },
    {
      title: (<div>#©€₵₭ & Jµ₴₮ ₣Ø₹ ₳ ₲ØØĐ ₮ł₥Ɇ!</div>),
      content: (<div>
        Dear <i>[Name of recipient]</i>,<br/><br/>

        I hope this email finds you well. I am writing to share with you the minutes of our recent meeting and provide you with a link to the recorded video on YouTube.
        <br/><br/>
        Please find attached a copy of the meeting minutes for your reference. They provide <b><i>--Censored--</i></b> during the meeting.
        <br/><br/>
        In addition, we have uploaded a recording of the meeting to YouTube for your convenience. You can access the video by clicking on the following link: [https://?????.be/R0wV_rm9mKQ]. Please <b><i>--Censored--</i></b> in watching the recording.
        <br/><br/>
        If you have any questions or concerns about the meeting or the video, please do not hesitate to reach out to me. Thank you for your time and attention, and I look forward to our continued collaboration.
        <br/><br/>
        Best regards,<br/>
        Test Management Department
      </div>),
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
      <div className="bg-[#330000] text-white min-h-screen font-noto-sans">
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
