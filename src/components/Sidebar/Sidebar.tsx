import { useState, useRef, useEffect } from "react";
import { Cross } from "../../shared/icons/Cross";

interface ISidebarItem {
  id: string;
  label: string;
  onClick?: () => void;
  children?: ISidebarItem[];
}

interface ISidebar {
  isOpen: boolean;
  onClose: () => void;
  items: ISidebarItem[];
}

type hoveredBtnState =
  | "close"
  | "close2"
  | "open"
  | null
  | "1-level"
  | "2-level";

export const Sidebar = ({ isOpen, onClose, items }: ISidebar) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [hoveredButton, setHoveredButton] = useState<hoveredBtnState>(null);

  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        event.target instanceof Node &&
        !sidebarRef.current.contains(event.target) &&
        isOpen
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderMenuItem = (item: ISidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isHovered = hoveredMenuItem === item.id;

    return (
      <div key={item.id} style={{ width: "100%" }}>
        <div
          style={{
            ...styles.menuItem(level, hasChildren as boolean),
            ...(isHovered ? styles.menuItemHover : {}),
          }}
          onClick={() =>
            hasChildren ? toggleExpanded(item.id) : item.onClick?.()
          }
          onMouseEnter={() => setHoveredMenuItem(item.id)}
          onMouseLeave={() => setHoveredMenuItem(null)}
        >
          <div style={styles.menuItemContent}>
            <span style={styles.menuItemLabel}>{item.label}</span>
          </div>
        </div>

        {item.children && hasChildren ? (
          <div style={styles.submenuContainer(isExpanded)}>
            <div style={styles.submenuBackground}>
              {item.children.map((child: ISidebarItem) =>
                renderMenuItem(child, level + 1)
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          ...styles.backdrop,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      <div ref={sidebarRef} style={styles.sidebar(isOpen)}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>Menu</h2>
          <button
            onClick={onClose}
            style={{
              ...styles.closeButton,
              ...(hoveredButton === "close" ? styles.closeButtonHover : {}),
            }}
            onMouseEnter={() => setHoveredButton("close")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <Cross />
          </button>
        </div>

        <div style={styles.menuContainer}>
          {items.map((item) => renderMenuItem(item))}
        </div>
      </div>
    </>
  );
};

const styles = {
  backdrop: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "opacity 0.3s ease",
    zIndex: 40,
  },
  sidebar: (isOpen: boolean) => ({
    position: "fixed" as const,
    top: 0,
    right: 0,
    height: "100vh",
    width: "320px",
    backgroundColor: "white",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 50,
  }),
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    borderBottom: "1px solid #e5e5e5",
  },
  headerTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1f2937",
  },
  closeButton: {
    padding: "8px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonHover: {
    backgroundColor: "#f3f4f6",
  },
  menuContainer: {
    overflowY: "auto" as const,
    height: "calc(100vh - 80px)",
    paddingBottom: "80px",
  },
  menuItem: (level: number, hasChildren: boolean) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "12px 16px",
    paddingLeft: level === 0 ? "16px" : level === 1 ? "32px" : "48px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer" as const,
    transition: "background-color 0.2s ease",
    textAlign: "left" as const,
  }),
  menuItemHover: {
    backgroundColor: "#f3f4f6",
  },
  menuItemContent: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  menuItemIcon: {
    color: "#4b5563",
  },
  menuItemLabel: {
    color: "#1f2937",
    fontWeight: "500",
    fontSize: "14px",
  },
  chevronContainer: {
    transition: "transform 0.2s ease",
  },
  submenuContainer: (isExpanded: boolean) => ({
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    maxHeight: isExpanded ? "384px" : "0",
    opacity: isExpanded ? 1 : 0,
  }),
  submenuBackground: {
    backgroundColor: "#f9fafb",
  },

  mainContainer: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    padding: "32px",
  },
  contentWrapper: {
    maxWidth: "1024px",
    margin: "0 auto",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "32px",
  },
  storyCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    marginBottom: "32px",
  },
  storyTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginBottom: "24px",
  },
  storyButton: (isActive: boolean) => ({
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "500",
    transition: "all 0.2s ease",
    border: "none",
    cursor: "pointer",
    backgroundColor: isActive ? "#3b82f6" : "#e5e7eb",
    color: isActive ? "white" : "#374151",
  }),
  storyButtonHover: (isActive: boolean) => ({
    backgroundColor: isActive ? "#3b82f6" : "#d1d5db",
  }),
  actionButtonGroup: {
    display: "flex",
    gap: "16px",
  },
  openButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    backgroundColor: "#10b981",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
  },
  openButtonHover: {
    backgroundColor: "#059669",
  },
  closeButton2: {
    padding: "12px 24px",
    backgroundColor: "#ef4444",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
  },
  closeButton2Hover: {
    backgroundColor: "#dc2626",
  },
  demoCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    padding: "24px",
  },
  demoTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  demoDescription: {
    color: "#4b5563",
    marginBottom: "16px",
    lineHeight: "1.5",
  },
  featuresContainer: {
    backgroundColor: "#f9fafb",
    padding: "16px",
    borderRadius: "8px",
  },
  featuresTitle: {
    fontWeight: "500",
    marginBottom: "8px",
  },
  featuresList: {
    fontSize: "14px",
    color: "#4b5563",
    margin: 0,
    paddingLeft: "16px",
  },
  featureItem: {
    marginBottom: "4px",
  },
};
