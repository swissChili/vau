# wisp
A lisp dialect for the web

## demo

```clj
(def name "Pete Mondelo")
(def greet 
    (lambda
        (name)
        (print "Hello" name)))

(greet name)
;; Output => Hello Pete Mondelo
```
