/**

	#Tasks:
  1. Make an error handler using a try - catch - finally block
  2. What would happen if we put e.g. 'string' under the throw - is it a good practice?

  #Objective:
  Understanding error handling methods. Knowing that in JS you can throw away
  as an error - whatever we want.
  But in practice - we should be using the Error object,
  wanting to develop it - e.g. inheriting from it or composing it.

 */

function helloICanBreak(condition) {
	if (!condition){
		throw new Error('Breaker !')
	} else {
		return 'not-break'
	}
}

// Solve here:
helloICanBreak(20 > 2)
helloICanBreak(20 < 2)



console.log('Code below will not work... :(')
