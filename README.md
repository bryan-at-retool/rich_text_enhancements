
```json
{
  input: "",
  output: "",
  onBlur: "retoolQueryToRunOnBlor",
	toolbar: [
            [{ "font": [] }, { "size": ["small", false, "large", "huge"] }], // custom dropdown

            ["bold", "italic", "underline", "strike"],

            [{ "color": [] }, { "background": [] }],

            [{ "script": "sub" }, { "script": "super" }],

            [{ "header": 1 }, { "header": 2 }, "blockquote", "code-block"],

            [{ "list": "ordered" }, { "list": "bullet" }, { "indent": "-1" }, { "indent": "+1" }],

            [{ "direction": "rtl" }, { "align": [] }],

            ["link", "image", "video", "formula"],

            ["clean"]
        ]
}
```

- leave toolbar out to also get all options
- [Toolbar settings](https://quilljs.com/docs/modules/toolbar/)
- To refresh the input, change the `input` key like with `{{ table1.selectedRow.data.notes }}`
- All changes are written to the `output` key like `{{ customComponent1.model.output }}`