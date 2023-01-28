import * as React from 'react';
import { AppIcon } from '@beyond/docs/ui/icons';
import { Link, Elink } from '@beyond/ui/link';
import { Hamburger } from './hamburger';
import { Notice } from './notice';
import { BeyondImage } from '@beyond/ui/image';
import { ThemeToggleButton } from '@beyond/docs/components/theme-button';

export /*bundle*/
function Widget() {
	return (
		<>
			<Notice />
			<header className="docs-header">
				<div className="container flex-container space-between ph-15">
					<section className="header-logo">
						<div>
							<Hamburger />
							<Link href="/">
								<BeyondImage
									src="/images/beyond-logo.png"
									className="img-logo"
									alt="Beyond the universal meta framework"
								/>
							</Link>
						</div>
					</section>
					<div className="flex-center-y right-content">
						<span className="version">1.0.0</span>
						<ThemeToggleButton />
						<Elink className="docs-header__link-icon" href="http://github.com">
							<AppIcon icon="github" />
						</Elink>
					</div>
				</div>
			</header>
		</>
	);
}
