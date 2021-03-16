# any-src
Simple web-component provide `src` attribute to enrich HTML templates.

## Example
### Data source
The following `JSON` available at `/data.json` end-point.
```json
{
  "sample": "Sample text",
  "numeric": 120,
  "image": "https://picsum.photos/100/100"
}
```

### HTML
```html
<any-src src="/data.json">
    <p data-text="sample"></p>
    <img data-src="image">
    <div>
        <input type="number" data-value="numeric">
    </div>
</any-src>
```

## TODO
* HTTP options for the fetch function
* loader support
* error handling?
