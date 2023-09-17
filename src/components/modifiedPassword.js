import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';



function ModifiedPassword() {
    // Déclarer l'etat de email pour qu'il puisse avoir la donner 
    const [email, setEmail] = useState("");
    //Déclarer l'état de emailSent pour savoir si le mail a bien était envoyer  
    const [emailSent, setEmailSent] = useState(false);
    // Déclarer l'état de erreur pour les gérer 
    const [error, setError] = useState(null);

    //Récuperer l'instance de firebase 
    const auth = getAuth();

    // Fonction qui permet de réinitialiser le mot de passe 
    const resetPassword = async (e) => {
    //Empecher le rafraichissement de la page 
    e.preventDefault();

    try {
    // envoie une email de reinitialisation au mail ecris 
      await sendPasswordResetEmail(auth, email);
      //Si le mail a bien etait envoyer alors message de reussite 
      setEmailSent(true);
    } catch (error) {
    //Autrement message d'erreur 
      setError(<h3>Votre adresse n'est pas valide veuillez recommencer</h3>); 
    }
  };

    return (
        
      <div className="container">
        
      <h2>ARKHE</h2>
      <h3>réinitialisation du mot de passe </h3>
      {emailSent ? (
        // Si l'envoie du mail a reussi alors envoie du message 
        <p>Un e-mail de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.</p>
      ) : (
      <form onSubmit={resetPassword}>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='SubmitNewPassword' type="submit">Changer mon mot de passe</button>
      </form>
      )}
      {/* envoie d'un message d'erreur si une erreur et detecter  */}
      {error && <p>{error}</p>}
      <br/>
      
      <Link to="/*">Revenir a la page Principal</Link>
    </div>
    )

}
export default ModifiedPassword; 