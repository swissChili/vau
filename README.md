# vau
A lisp dialect written in TypeScript.

Pronounced like 'vow'.

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

## building

```sh
$ yarn install
yarn install v1.12.3
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.08s.

$ yarn start
yarn run v1.12.3
$ tsc; node index.js
 ERR  No file specified
      Usage:
      vau [file.vau]
Done in 2.07s.

$ node index.js hello.vau
```
