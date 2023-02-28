//Задание 1.

const user = {
	имя: 'Alyona',
	фамилия: 'Kiseleva'
}; 

function db(usr) {
	for (let key in usr) {
		
		 if (usr.hasOwnProperty(key)) {

			console.log(`${key}: ${usr[key]}`); 
		};   
	 
	};
	
};
db(user);

