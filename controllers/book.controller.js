const Book = require('../models/book.model');

exports.AddBooks = async (req, res) => {
  try {
    const newBook = new Book(req.body);  // Création du livre avec les données du corps de la requête
    await newBook.save();  // Sauvegarde dans MongoDB
    res.status(201).json(newBook);  // Répond avec le nouveau livre créé
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout du livre', error });  // Répond avec un message d'erreur et l'erreur complète
  }
};


exports.Getallbooks= async (req,res)=>{
    try{
        const books=await Book.find();
        res.status(200).json(books);
    }catch(error){
        res.catch(401).json({message:"Erreur lors de la récupération des livres", error });
    }
};


exports.GetBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);  // Trouver un livre par ID
      if (!book) {
        return res.status(404).json({ message: "Livre non trouvé" });
      }
      res.status(200).json(book);  // Retourner le livre trouvé
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération du livre", error });
    }
  };


  exports.UpdateBook = async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Mettre à jour le livre
      if (!updatedBook) {
        return res.status(404).json({ message: "Livre non trouvé" });
      }
      res.status(200).json(updatedBook);  // Retourner le livre mis à jour
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour du livre", error });
    }
  };


  
exports.DeleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);  // Supprimer le livre
    if (!deletedBook) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }
    res.status(200).json({ message: "Livre supprimé", deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du livre", error });
  }
};