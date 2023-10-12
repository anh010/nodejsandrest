import {addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact} from '../controllers/crmController';

/**
 * 
 * @param {*} app 
 */
const routes = (app) => {
    // allow us to have get put delete commands with out end points
    app.route('/contact')
    // get all contacts
    .get((req, res, next ) => {
        /**
         * middleware, express functions that access the request and response
         * objects and act on them
         */
        console.log (`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();

        
    }, getContacts) 

    // post new contact 
    .post(addNewContact);

    app.route('/contact/:contactId')
    // get specific contact
    .get(getContactWithID)
    // update contact
    .put(updateContact) 
    // delete route 
    .delete(deleteContact) 
}

export default routes;