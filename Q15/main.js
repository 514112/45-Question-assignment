"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
send out a new set of invitations. You’ll have to think of someone else to invite.

Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.

Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.

Print a second set of invitation messages, one for each person who is still in your list.*/
let guestList = ["Aiman", "Gulnaz", "Muskan"];
//Print the name who is not invited for dinner 
let unableAttend = guestList.splice(0, 1)[0];
console.log(`${unableAttend} not invited for Dinner`);
//push
guestList.push("Nimra");
console.log(guestList);
//Print a message for each person
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to Dinner`);
});
