# any-src

## Under the hood
```html
<any-src src="/path/to/json">
    <p>Hello <span data-text="name"></span>!</p>
</any-src>
```

Flow
```
attibute(src) 
    -> hide(all) 
    -> display(loader)
    -> load(src)
    -> 
request >
```
1. request
