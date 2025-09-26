import { useEffect, useRef } from "react";

export const useScrollPosition = () => {
  const restoreTimeoutRef = useRef(null);

  useEffect(() => {
    // Lưu vị trí cuộn với throttling
    let scrollTimeout;
    const saveScrollPosition = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
        sessionStorage.setItem("scrollTimestamp", Date.now().toString());
      }, 100);
    };

    // Khôi phục vị trí cuộn với retry mechanism
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem("scrollPosition");
      const timestamp = sessionStorage.getItem("scrollTimestamp");

      if (savedPosition && timestamp) {
        // Chỉ khôi phục nếu lưu trong vòng 30 phút
        const thirtyMinutes = 30 * 60 * 1000;
        if (Date.now() - parseInt(timestamp) < thirtyMinutes) {
          const targetPosition = parseInt(savedPosition);
          let attempts = 0;
          const maxAttempts = 10;

          const tryRestore = () => {
            attempts++;

            // Kiểm tra xem trang đã load đủ chưa
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            if (
              documentHeight > windowHeight &&
              targetPosition < documentHeight
            ) {
              window.scrollTo({
                top: targetPosition,
                behavior: "auto",
              });

              // Xóa dữ liệu đã lưu sau khi khôi phục thành công
              sessionStorage.removeItem("scrollPosition");
              sessionStorage.removeItem("scrollTimestamp");
            } else if (attempts < maxAttempts) {
              // Thử lại sau 200ms nếu trang chưa load xong
              restoreTimeoutRef.current = setTimeout(tryRestore, 200);
            }
          };

          // Bắt đầu quá trình khôi phục
          restoreTimeoutRef.current = setTimeout(tryRestore, 100);
        } else {
          // Xóa dữ liệu cũ nếu quá thời gian
          sessionStorage.removeItem("scrollPosition");
          sessionStorage.removeItem("scrollTimestamp");
        }
      }
    };

    // Khôi phục vị trí khi load
    restoreScrollPosition();

    // Event listeners
    window.addEventListener("scroll", saveScrollPosition, { passive: true });
    window.addEventListener("beforeunload", saveScrollPosition);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
      window.removeEventListener("beforeunload", saveScrollPosition);
      clearTimeout(scrollTimeout);
      if (restoreTimeoutRef.current) {
        clearTimeout(restoreTimeoutRef.current);
      }
    };
  }, []);
};
