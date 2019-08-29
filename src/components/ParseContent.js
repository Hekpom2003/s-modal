class ParseContent {
  static Init(text) {
    const content = document.createElement('div');
    content.className = 's-modal__content';

    const scripts = text.match(/<script\b[^>]*>(.*?)<\/script>/gm); // ищем вхождения скриптов

    const contentText = text.replace(/<script\b[^>]*>(.*?)<\/script>/gm, ''); // удаляем нафиг скрипты из текста

    content.innerHTML = (contentText);

    scripts.map((item) => {
      const match = item.match(/<script(.*?)>(.*?)<\/script>/);

      if (match !== null) {
        const script = document.createElement('script');

        if (match[1] !== '') {
          let props = match[1] || false;
          props = props.match(/src=["'](.*?)["']/);
          script.src = props[1] || false;
        } else if (match[2] !== '') {
          script.innerHTML = match[2] || false;
        }

        content.append(script);
      }

      return false;
    });
    return content;
  }
}

export default ParseContent;
