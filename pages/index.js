import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Welcome() {
  const [name, setName] = useState('');
  const [dissolve, setDissolve] = useState(false);
  const [modalDissolve, setModalDissolve] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('userName')) {
        router.push('/home');
      }

    setDissolve(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      alert('Please enter a valid name.');
      return;
    
    }
    else {
      setName(trimmedName);
    }
    setShowModal(true);
    setTimeout(() => setModalDissolve(true), 50);
  };

  const handleConfirm = () => {
    const secretName = process.env.NEXT_PUBLIC_SECRET_NAME; // Replace with the actual secret name
    console.log(secretName);

    // Save the name in the browser's localStorage
    localStorage.setItem('userName', name);

    // Navigate to the Home page or the secret page depending on the entered name
    if (name === secretName) {
      router.push('/secret_home_0415');
    } else {
      router.push('/home');
    }
  };

  return (
    <div className="bg-[#53001c] text-white min-h-screen flex items-center justify-center`">
      <div className={`container mx-auto px-10 w-full max-w-md ${dissolve ? 'dissolve show' : 'dissolve'}`}>
        <h1 className="text-2xl mb-4">Enter your name to Login</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            className="bg-white text-black rounded p-2 mr-4 w-full px-4 "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <button className="bg-white text-black rounded px-4 py-2 mt-4 w-full" type="submit">
            Start
          </button>
        </form>
        <p className="text-xs mt-2">웹 캐시가 삭제되지 않도록 해주세요.</p>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className={`bg-white p-6 rounded shadow-lg text-black ${modalDissolve ? 'dissolveModal show' : 'dissolveModal'}`}>
            <h2 className="text-2xl mb-4">Is this your name?</h2>
            <p className="mb-4">{name}</p>
            <button className="bg-green-500 text-white rounded px-4 py-2 mr-2" onClick={handleConfirm}>
              Yes
            </button>
            <button className="bg-red-500 text-white rounded px-4 py-2" onClick={() => setShowModal(false)}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
