

// L'absence du var change tout !
let buu = 1;

function toto() {

    console.log(buu); // var buu; dans le context ? non -> var buu; dans parent ? -> il se bind au parent = 1

    buu = 10; // Le buu du parent = buu context de la fonction = 10
    console.log(buu); // 10
}

toto();


/*
// L'absence du var change tout !
var buu = 1;

(function() {

    console.log( buu ); // var buu; dans le context ? non -> var buu; dans parent ? -> il se bind au parent = 1
    buu = 10;  // Le buu du parent = buu context de la fonction = 10
    console.log( buu ); // 10
})();

console.log( buu ); // 10

console.log( '\n' );

// Le var change tout !
var foo = 1;

(function() {

    console.log( foo ); // var foo; dans le context ?
    OUIIII (même s'il est après il est décomposé en var foo
    au début puis foo = 10 à la même place ) // undefined
    var foo = 10; // foo (function context) = 10
    console.log( foo ); // 10
})();

console.log( foo ); // 1
*/
