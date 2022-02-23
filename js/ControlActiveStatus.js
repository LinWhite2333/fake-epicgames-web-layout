(function () {
  // 菜单按钮
  const menuIcon = document.querySelector(".menu-icon");
  // 菜单
  const menu = document.querySelector(".menu");
  // 遮罩覆盖层
  const overlay = document.querySelector(".overlay");
  // 搜索与分类框
  const searchCategoryBox = document.querySelector("#search-category-box");
  // 搜索按钮
  const iconSearch = document.querySelector(".icon-search");
  // 搜索框中的关闭按钮
  const searchClose = document.querySelector(".icon-close");

  /**
   * 切换遮罩
   * @param {boolean} [isOpen=false]
   */
  function toggleOverlay(isOpen = false) {
    if (isOpen) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  }
  /**
   * 切换菜单
   * @param {boolean} [isOpen=false]
   */
  function toggleMenu(isOpen = false) {
    if (isOpen) {
      menuIcon.classList.add("active");
      menu.classList.add("active");
      document.querySelector("body").style.overflow = "hidden";
      toggleOverlay(true);
    } else {
      menuIcon.classList.remove("active");
      menu.classList.remove("active");
      document.querySelector("body").style.overflow = "";
      toggleOverlay();
    }
  }
  /**
   * 切换搜索框
   * @param {boolean} [isOpen=false]
   */
  function toggleSearch(isOpen = false) {
    if (isOpen) {
      searchCategoryBox.classList.add("active");
      toggleOverlay(true);
    } else {
      searchCategoryBox.classList.remove("active");
      toggleOverlay();
    }
  }
  /**********/

  // 切换右侧菜单激活状态的方法
  function RightMenu() {
    if (!menuIcon.classList.contains("active")) {
      // 激活状态
      toggleMenu(true);
    } else {
      // 非激活状态
      toggleMenu();
    }
  }
  // 切换搜索框激活状态
  function SearchBox() {
    if (!searchCategoryBox.classList.contains("active")) {
      // 激活状态
      toggleSearch(true);
    } else {
      // 非激活状态
      toggleSearch();
    }
  }
  // 关闭搜索框
  function closeSearchBox() {
    toggleSearch();
  }

  // 去除遮罩覆盖层的方法并取消所有的激活状态
  function HiddenOverlay() {
    // 取消右侧菜单的激活状态
    toggleMenu();
    // 取消搜索框的激活状态
    toggleSearch();
  }

  // 浏览器窗口大小变化执行的方法
  function resizeFun() {
    scroll(0, scrollY);
    if (window.innerWidth >= 768 && menuIcon.classList.contains("active")) {
      // 浏览器大于等于768px取消菜单激活状态
      toggleMenu();
    }
    if (window.innerWidth >= 1024) {
      toggleSearch();
      // 取消搜索按钮的click事件
      iconSearch.removeEventListener("click", SearchBox);
    } else {
      // 搜索按钮添加 click 事件
      iconSearch.addEventListener("click", SearchBox);
    }
  }

  // 菜单按钮添加 click 事件
  menuIcon.addEventListener("click", RightMenu);
  // 遮罩添加 click 事件
  overlay.addEventListener("click", HiddenOverlay);
  // 搜索按钮添加 click 事件
  iconSearch.addEventListener("click", SearchBox);
  // 搜索框中的关闭按钮添加 click 事件
  searchClose.addEventListener("click", closeSearchBox);

  // 浏览器窗口大小变化事件
  window.onresize = resizeFun;
})();
