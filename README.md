# any-src
Simple web-component provide `src` attribute to enrich HTML templates.

The package export only single component `any-src`. 
All options and configuration done using HTML5 `data-*` attributes.

## Usage
```shell
npm i any-src
```

## API
### Component Attributes

| Attribute | Description |
| --- | --- |
| `src` | URL to load |
| `opts` | [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters) options `JSON` |


### Content Attributes

| Attribute | Description |
| --- | --- |
| `data-text` | Set `innerText` of element |
| `data-src` | Set `src` of element |
| `data-value` | Set `value` of element |


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
<any-src src="https://example/data.json">
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
