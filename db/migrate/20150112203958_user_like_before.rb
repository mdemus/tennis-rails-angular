class UserLikeBefore < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.integer :sport_id, :null => false, :default => 1
      t.string :old_password, :null => false, :default => "tennis"
      t.string :nom, :null => false
      t.integer :type, :null => false, :default => 0
      t.string :prenom, :null => false
      t.datetime :date_naissance, :null => false
      t.string :region
      t.string :departement
      t.integer :code_postal, :null => false
      t.string :ville
      t.integer :niveau
      t.string :club
      t.string :salle
      t.string :dispo
      t.string :varchar
      t.integer :visible, :default => 0
      t.datetime :last_visite
      t.integer :compt_visite
      t.integer :actif, :null => false, :default =>0
      t.integer :droit, :default => 0
      t.integer :alert_annonce, :default => 1
      t.integer :alert_partie, :default => 1
      t.integer :alert_tournoi, :default => 1
      t.integer :alert_message, :default => 1
      t.integer :alert_commentaire, :default => 1
      t.integer :alert_newsletter, :default => 1
      t.integer :alert_reponse_coach, :default => 1
      t.string :facebook_id, :default => 0
      t.string :facebook_url
    end
  end
end
