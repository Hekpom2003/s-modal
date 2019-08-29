import DrawModal from './components/DrawModal';

import './style.scss';

class SModal {
  constructor(props) {
    this.props = props;

    this.prepareData();


    return this;
  }

  prepareData() {
    if (this.props.ajax !== undefined) {
      this.getAjaxContent();
    } else if (this.props.inline !== undefined) {
      this.getInlineContent();
    }
  }

  /**
   * Получаем контент ajax-ом
   */
  getAjaxContent() {
    const { url, method } = this.props.ajax;
    let { data } = this.props.ajax;

    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }

    if (url !== undefined) {
      fetch(url, {
        credentials: 'include',
        method: method || 'get',
        data,
      })
        .then(res => res.text())
        .then(text => DrawModal.draw(text));
    }
  }

  drawContent() {
    DrawModal.draw(this.content);
  }

  /**
   * Получаем инлайновый контент
   */
  getInlineContent() {
    const content = document.querySelector(this.props.inline.selector);
    DrawModal.draw(content.innerHTML);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    new SModal({
      // ajax: {
      //   url: 'http://luidorauto.ru',
      //   data: {},
      //   method: 'post',
      // },

      inline: {
        selector: '#modalContext',
      },
    });
  });
});
