import mongoose, { mongo } from 'mongoose';
import {ContactSchema} from '../models/crmModel';
import { json } from 'body-parser';

const Contact = mongoose.model('Contact', ContactSchema);

// add new contanct into database
export const addNewContact = async (req, res)=>{
    let newContact = new Contact(req.body);
    let contact = await newContact.save();
    res.json(contact);
};

// getting data from db
export const getContacts = async (req, res) => { 
    let contacts = await Contact.find({}); 
    res.json(contacts); 
};
// specific id 
export const getContactWithID = async (req,res) => {
    let contactResponse = await Contact.findById(req.params.contactId);
    res.json(contactResponse);
};

// update contact
export const updateContact = async (req, res)=>{
    let upResponse = await Contact.findOneAndUpdate({_id:req.params.contactId},req.body,{new:true});
    res.json(upResponse);
};

// delete contact
export const deleteContact = async(req, res) => {
    await Contact.deleteOne({_id:req.params.contactId});
    res.json({message: 'Successfully deleted contact'});
};