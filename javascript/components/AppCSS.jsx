import reactCSS from 'reactcss';

export const styles = reactCSS({
  'default': {
    main: {
      fontSize: "18px"
    },
    editor: {
      height: "1000px",
      width: "50%",
    },
    preview: {
      width: "50%",
      paddingLeft: "25",
      paddingTop: "15",
      height: "1000px",
      fontSize: "18px",
      lineHeight: "1.5",
      borderLeft: "1px dashed #ddd"
    },
  }
})