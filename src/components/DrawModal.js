import ParseContent from './ParseContent';

class DrawModal {
  static draw(data) {

    const container = document.createElement('div');
    container.className = 's-modal';
    document.body.append(container);

    const overlay = document.createElement('div');
    overlay.className = 's-modal__overlay';
    container.append(overlay);

    const body = document.createElement('div');
    body.className = 's-modal__body';
    container.append(body);

    const close = document.createElement('div');
    close.className = 's-modal__close';
    close.onclick = () => container.remove();
    body.append(close);

    body.append(ParseContent.Init(data));


  }
}

export default DrawModal;
