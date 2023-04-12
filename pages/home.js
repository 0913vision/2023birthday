import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [dissolve, setDissolve] = useState(false);
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
  

  return (
    <>
      <div className="bg-[#330000] text-white min-h-screen font-noto-sans">
        <div className={`container mx-auto px-8 pt-8 pb-8 ${dissolve ? 'dissolve show' : 'dissolve'}`}>
          {/* Section 1: Title */}
          <div className="border-2 border-white p-4 my-4">
            <h1 className="text-2xl">Document #1 : Guide for the Test</h1>
          </div>

          {/* Section 2: Name */}
          <div className="border-2 border-white p-4 my-4">
            <h2 className="text-xl">Hello,{userName}!</h2>
          </div>

          {/* Section 3: Context */}
          <div className={`border-2 border-white p-4 my-4`}>
            <p className={`text-sm mb-2 mt-2 text-container`}>
              Thank you for participating in this test. This test is designed to assess your Korean SAT-like reasoning skills as well as your years of dating experience. The scope of the test is related to your life, and the format of the questions is typical of the Korean SAT. There is no specific time limit for the test, and we would appreciate it if you could take enough time according to your circumstances. As a reward for participating in the test, safety cases, ***, ***, ***, and other items are prepared. We wish you good luck in the upcoming test. <br></br><br></br>Test Management Department.
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
