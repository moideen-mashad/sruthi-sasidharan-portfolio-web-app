'use client';

interface NavbarTogglerProps {
  isOpen: boolean;
  onToggle: () => void;
}

const NavbarToggler = ({ isOpen, onToggle }: NavbarTogglerProps) => {
  return (
    <button
      className={`navbar-toggler-custom ${isOpen ? 'is-open' : ''}`}
      type="button"
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <div className="navbar-toggler-icon-wrapper">
        <span className="navbar-toggler-line navbar-toggler-line-1"></span>
        <span className="navbar-toggler-line navbar-toggler-line-2"></span>
        <span className="navbar-toggler-line navbar-toggler-line-3"></span>
      </div>
    </button>
  );
};

export default NavbarToggler;

