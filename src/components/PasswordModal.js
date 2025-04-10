import { useState } from "react";

function PasswordModal({ isOpen, setIsOpen }) {
  const [isIncorrect, setIsIncorrect] = useState(null);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    e.target.querySelector('input[name="password"]').blur();

    if (value === process.env.REACT_APP_PASSWORD || value === process.env.DOTENV_VAULT_PRODUCTION) {
      setIsOpen(false);
    } else {
      setIsIncorrect(true);
    }
  };

  if (!isOpen) return null;

  return (
    <dialog 
      open
      id="password-modal"
    >
      <div className="modal">
        <h1 className="text-xl mb-4">Enter Password</h1>
        <div className="relative">
          <form className="flex flex-wrap gap-2" onSubmit={handleSubmit}>
            <input 
              type="password"
              name="password"
              className={`border p-2 rounded-md ${isIncorrect ? 'border-red-500' : 'border-ellie-lightGrey'}`}
              placeholder="Enter password..."
              onChange={handleChange}
              value={value}
            />
            <button 
              type="submit"
              className="bg-ellie-pink text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
          {isIncorrect ? (
            <p className="text-red-500 text-sm absolute -bottom-6 left-0 italic">
              <span className="mr-1">✕</span>
              Incorrect password
            </p>
          ) : null}
        </div>
      </div>
    </dialog>
  );
}

export default PasswordModal;