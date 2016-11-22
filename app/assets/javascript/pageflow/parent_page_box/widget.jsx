const {registerWidgetType, connect, combine, classNames} = pageflow.react;
const {currentParentPageAttributes, currentParentChapterAttributes, t} = pageflow.react.selectors;
const {PageThumbnail} = pageflow.react.components;

function ParentPageBox(props) {
  return (
    <div className="parent_page_box">
      <a className={classNames('parent_page_box-link',
                               props.parentPage && 'is_visible')}
         href={`#${props.parentPage ? props.parentPage.permaId : ''}`}
         tabIndex="2"
         onClick={handleClick} />

      {renderOverlay(props.parentPage, props.parentChapter, props.t)}
    </div>
  )
}

function renderOverlay(page, chapter, t) {
  if (page) {
    return (
      <div className="parent_page_box-overlay">
        {renderBackTo(chapter, t)}
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

function renderBackTo(chapter, t) {
  if (chapter.title) {
    return (
      <div>
        {t('pageflow.public.back_to_chapter')}
        <div className="parent_page_box-chapter_title">
          {chapter.title}
        </div>
        <hr className="parent_page_box-separator" />
      </div>
    );
  }
  else {
    return (
      <div className="parent_page_box-standalong_back_label">
        {t('pageflow.public.back_to_chapter')}
      </div>
    );
  }
}

function handleClick(event) {
  pageflow.slides.goToParentPage();
  event.preventDefault();
}

registerWidgetType('parent_page_box', {
  component: connect(combine({
    t,
    parentPage: currentParentPageAttributes(),
    parentChapter: currentParentChapterAttributes()
  }))(ParentPageBox)
});
