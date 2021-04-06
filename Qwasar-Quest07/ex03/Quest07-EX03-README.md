Hash is a data structure which works like an array but instead of having numerical value as index you can specify "any type" of key:


	# ARRAY
	my_array = [1, 2, 3]
	my_array[0] # 1
	
	# HASH
	my_hash = {'age' => 34, 'name' => 'Luke'}
	my_hash['age']  # 34
	my_hash['name'] # Luke


You have a test for a class and we want to know the average results for the class.

Write a function that takes an array of hash with all of the grades/marks for a given test and returns an average grade for the entire class.

Input are in JSON (be careful ruby users, "string": is not a symbol)

	/*
	**
	** QWASAR.IO -- my_average_mark
	**
	**
	** @param {String_integer[]} param_1
	** @return {float}
	
	**
	*/
	
	
	function my_average_mark(param_1) {
	
	};

****EXAMPLE:****

	Input: [
        	{"string": "John", "integer": 7},
        	{"string": "Margot", "integer": 8},
        	{"string": "Jules", "integer": 4},
        	{"string": "Marco", "integer": 19}
	]
	
	Output: 9.5


****EXAMPLE:****

	Input: []
	Output: 0.0

****EXAMPLE:****

	Input: [
        	{"string": "Quentin", "integer": 1},
        	{"string": "Fred", "integer": 1},
        	{"string": "Julia", "integer": 18},
        	{"string": "stephanie", "integer": 13}
	]
	
	Output: 8.3
