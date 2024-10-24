import { useState, useEffect } from 'react'
import '../main.css';
import { Nav } from '../component/NavBar'
import { logout, updateProfile } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/user'

const testLogin = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    logout
    return
  }

  try {
    let user = await getProfile() // Utilisation du token pour récupérer le profil
    dispatch(login(user)) // Dispatch si le profil est récupéré
  } catch (e) {
    logout // logout si une erreur survient
    localStorage.removeItem('token') // Suppression du token du stockage local
  }
};


function User() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)
  const user = useSelector((state) => state.user.user)
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  useEffect(() => {
    const fetchUserData = async () => {
      await testLogin()
      if (user) { // Met à jour les champs si l'utilisateur existe
        setfirstName(user.firstName)
        setlastName(user.lastName)
      }
    };
    
    fetchUserData();
  }, [user, dispatch])
  // Fonction pour basculer la modale
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <Nav />

        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}
            </h1>
            <button className="edit-button" onClick={toggleModal}>
              Edit Name
            </button>
          </div>

          <h2 className="sr-only">Accounts</h2>

          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>

          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>

          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={toggleModal}>
                &times;
              </span>
              <h2>Edit Name</h2>
              <div className="UpdatefirstName">
                <input
                  type="text"
                  placeholder="Enter new firstName"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>
              <div className="UpdateName">
                <input
                  type="text"
                  placeholder="Enter new lastName"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
              <button
                className="save-button"
                onClick={async () => {
                  // Validation des champs
                  if (firstName.trim() === '' || lastName.trim() === '') {
                    alert('Veuillez remplir tous les champs');
                    return;
                  }

                  try {
                    const response = await updateProfile(firstName, lastName)
                    dispatch(login(response.body))
                    console.log(response);// pour voir ce que l'API renvoie ici
                    toggleModal() // Ferme la modale après la mise à jour
                  } catch (error) {
                    console.error("Erreur lors de la mise à jour du profil :", error);
                    alert("Une erreur est survenue lors de la mise à jour du profil. Veuillez réessayer.");
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default User;