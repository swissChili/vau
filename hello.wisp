;; def binds a variable to a value
;; variables can be reset with the 
;; def keyword again
(def name "richard stallman")

;; everything in wisp follows the
;; same syntactical rules. Funcs
;; consist of an indentifier and
;; a finite number of params. They
;; are invoced as follows:
(print "Hello, World!")
;; Here a function `print` is called
;; with a single parameter, a string
;; Hello, World. Multiple parameters
;; need not be seperated by commas.

;; Unlike whitespace, indentation and
;; newlines (the interpreter uses \n)
;; are irelevant, except to terminate
;; comments. Whitespace serves as a
;; seperation between tokens. However,
;; if, for example a stirng follows a
;; number directly, the whitespace may
;; be emitted.
(print 1"+ 2")

;; Functions are created by assigning
;; a lambda to a variable. This is
;; similar to JS arrow functions, and
;; if you've ever used a functional
;; language you should be familiar
;; with this.
(def greet
    (lambda
        ;; a list of parameters
        (name)
        ;; the body of the lambda
        (print name)))

;; This works just like you'd expect.
;; Call it like any other function.
(greet name)

;; Allowed chars in identifiers are
;; -'$_ and, ofcourse any letters.
