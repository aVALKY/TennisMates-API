const { QueryTypes } = require('sequelize');
const Utilisateur = require('../Models/Utilisateur');
const Profile = require('../Models/profile');

class UtilisateurService {
    
    async getAllUtilisateur() {
        return await Utilisateur.findAll();
    }

    async getUtilisateurById(UtilisateurID) {
        return await Utilisateur.findByPk(UtilisateurID);
    }

    async removeUtilisateur(utilisateurID) {
        return await Utilisateur.destroy({
            where: { UT_ID: utilisateurID }
        });
    }

    async updateUtilisateur(utilisateurID, utilisateur) {
        return await Utilisateur.update(utilisateur, {
            where: { UT_ID: utilisateurID },
            individualHooks: true
        });
    }

    async getAllUtilisateursAvecProfiles() {
        const users = await Utilisateur.findAll({include: "profile"})
        return users
    }
}

module.exports = new UtilisateurService();
