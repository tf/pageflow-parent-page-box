const {createContainer, createWidget, resolve, classNames} = pageflow.react;
const {PageThumbnail} = pageflow.react.components;

function ParentPageBox(props) {
  return (
    <div className="parent_page_box">
      <a className={classNames('parent_page_box-link',
                               props.parentPage && 'is_visible')}
         href={`#${props.parentPage ? props.parentPage.permaId : ''}`}
         tabIndex="2"
         onClick={handleClick} />

      {renderOverlay(props.parentPage)}
    </div>
  )
}

function renderOverlay(page) {
  if (page) {
    return (
      <div className="parent_page_box-overlay">
        Zurück zu Kapitel
        <div className="parent_page_box-chapter_title">
          {page.chapter.title}
        </div>
        <hr className="parent_page_box-separator" />
        <span className="parent_page_box-page_title">
          {page.title}
        </span>
        <PageThumbnail className="parent_page_box-thumbnail" page={page} />
      </div>
    );
  }
  else {
    return null;
  }
}

function handleClick(event) {
  pageflow.slides.goToParentPage();
  event.preventDefault();
}

pageflow.parentPageBox.Widget = createWidget(createContainer(ParentPageBox, {
  fragments: {
    parentPage: resolve('currentParentPage', {
      fragments: {
        chapter: resolve('chapter')
      }
    })
  }
}));
