var  listContacts = function (contacts){
    document.write('<h1>Planete element</h1>');

    contacts.forEach(element => {
        document.write(`<h2>${element.name}</h2>`);
        document.write('<dl>');
        document.write('<dt>E-mail address</dt>');
        document.write(`<dd><a href="mailto:${element.email}">${element.email}</a></dd>`);
        document.write('<dt>Phone number</dt>');
        document.write(`<dd><a href="tel:${element.tel}">${element.tel}</a></dd>`);
        document.write('<dt>Location</dt>');
        document.write(`<dd>Between ${element.loc[0]} km & ${element.loc[1]} km from the Sun.</dd>`);
        document.write('<dl>');
    });
};


listContacts(elements)